const db = require('../models');
// const scraper = require('../controllers/scraper.js');

module.exports = (app) => {
  app.post('/articles', (req, res) =>{
    // // console.log(scraper());
    console.log(req.body.title);
    db.Article.create(req.body)
      .then(dbArticle => {
        res.json(dbArticle);
      });
  });

  app.post('/notes', (req,res) => {

    // let title = req.body.title;
    // let body = req.body.body;
    // let articleId = req.body.articleId;
    // console.log('logging the body:', articleId,title,body);
    db.Note.create(req.body)
    .then(function(dbNote){
      console.log('its showing object id here: ',dbNote.articleId);
      return db.Article.findOneAndUpdate({_id: dbNote.articleId}, {$push: { notes: dbNote._id}}, {new: true});
      console.log('Is this posting here?',dbNote);
    })
    // .then(function(dbUser){
    //   console.log(dbUser);
    //   res.json(dbUser);
    // })
    .catch((err) =>{
      console.error(err);
      res.json(err);
    });
  });

  app.delete('/articles', (req,res) =>{
    db.Article.remove({})
      .then(dbArticle =>{
        console.log('Articles Removed');
      })
  });

  app.get('/articles', (req,res) => {
    db.Article.find({}).populate('notes').then((dbNote)=>{
      res.json(dbNote);
    });
  });

  app.get('/notes', (req,res) => {
    db.Note.find({}).then((dbNote) =>{
      res.json(dbNote);
    });
  });
}
