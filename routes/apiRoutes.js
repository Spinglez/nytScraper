const db = require('../models');
// const scraper = require('../controllers/scraper.js');

module.exports = (app) => {
  app.get('/api/crawl', (req, res) =>{
    // console.log(scraper());
    res.send('Scraping:')
    // console.log('test');
    // res.send(scraper())
  });
}
