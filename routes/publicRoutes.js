const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');




module.exports = (app) => {
  app.get('/', (req,res) => {
    axios.get("https://www.nytimes.com/").then(response => {

         let $ = cheerio.load(response.data);

         let results = [];

         $("article").each( (i, element) => {

             let title = $(element).children().find("h2.esl82me2").text();
             let summary = $(element).children().find("p.e1n8kpyg0").text();
             let link = "https://www.nytimes.com" + $(element).children().find("a").attr("href");

             // Save these results in an object that we'll push into the results array we defined earlier
             results.push({
                 id: i,
                 title: title,
                 summary: summary,
                 link: link
             });
         });
         res.render('index',{
           article: results
         });
       });
     });

  app.get('/saved', (req,res) =>{
    res.render('saved',{

    })
  })
};
