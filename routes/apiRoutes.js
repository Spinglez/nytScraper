const db = require('../models');
// const scraper = require('../controllers/scraper.js');

module.exports = (app) => {
  app.post('/articles', (req, res) =>{
    // // console.log(scraper());
    console.log(req.body.title);
    // let title = req.body
    // console.log(db.Article.find({title: req.body.title}));
    // if (req.body.title == db.Article.find({title: req.body.title})) {
    //     res.send(alert('article is already saved'));
    //     return;
    // }
    // else{
    db.Article.create(req.body)
      .then(dbArticle => {
        res.json(dbArticle);
      });
    // };
    // console.log('test');
    // res.send(scraper())
  });

//   app.get('/saved'), (req,res) => {
//       console.log('sending');
//       db.Article.find({})
//       .then(dbArticle => {
//     console.log(dbArticle);
//   });
// }
  app.delete('/articles', (req,res) =>{
    db.Article.remove({})
      .then(dbArticle =>{
        console.log('Articles Removed');
      })
  });

  app.post('/articles:id'), (req,res) => {
    console.log(req.params);
  }
}
