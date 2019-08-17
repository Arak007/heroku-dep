const Author = require('../models/author');





exports.create = (req, res) => {
  console.log(JSON.stringify(req.body.author))
  Author.create(
    req.body.author
  ).then(() => res.status(200).send({success: "Author created"}))
   .catch(err => res.status(404).send(err));
};
