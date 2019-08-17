// Our controller action
exports.show = (req, res) => {
    // Check if our path is the root or a page
    const path = (req.path === '/')
  
    // Render that path
    res.render(`pages/index`,{title:"Express"});
  }
  exports.about = (req, res) => {
    // Check if our path is the root or a page
    const path = (req.path == '/about')
  
    // Render that path
    res.render(`pages/about`);
  }
  exports.contact = (req, res) => {
    // Check if our path is the root or a page
    const path = (req.path == '/contact')
  
    // Render that path
    res.render(`pages/contact`);
  }