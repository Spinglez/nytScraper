const db = require('../models');
// const scraper = require('../controllers/scraper.js');

module.exports = (app) => {
  app.post('/articles', (req, res) =>{
    // console.log(scraper());
    db.Article.create(req.body)
      .then(dbArticle => {
        res.json(dbArticle);
      })
    // console.log('test');
    // res.send(scraper())
  });
}
