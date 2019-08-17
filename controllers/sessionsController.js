const Author = require('../models/author');
const jwt = require("jsonwebtoken");


 exports.authenticate = (req, res) => {
   console.log("the body",req.body)
    Author.findOne({
        email: req.body.email
      })
      .then(author => {
        author.authenticate(req.body.password, (err, isMatch) => {
          if (err) throw new Error(err);
  
          if (isMatch) {

            console.log(" Hey there");
            req.session.userId = author.id;

            const token = jwt.sign({
              payload: req.body.email},
              "bobthebuilder",
              {expiresIn: "1h"}
              );

              res.cookie('token', token, { httpOnly: true }).status(201).send({success: "Authenticated successfully"});

          } else {
            
            res.json({ error: `ERROR: Your credentials do not match.` });
          }
        });
      })
      .catch(err => {
        console.error(err)
        res.json(err);
      });
    }

  exports.logout = (req, res) => {
    if (!req.isAuthenticated()) res.status(404).send({ error: "Couldn't authenticate request" });

    req.session.userId = null;
    res.clearCookie('token').status(200).send({ success: "You are now logged out" });
  };