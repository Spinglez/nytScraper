const cheerio = require('cheerio');
const axios = require('axios');

function scrape() {
  axios.get("https://www.nytimes.com/").then(res => {
             // Load the Response into cheerio and save it to a variable
             let $ = cheerio.load(res.data);

             // An empty array to save the data that we'll scrape
             let results = [];

             // With cheerio, find each p-tag with the "title" class
             // (i: iterator. element: the current element)
             $("article").each((i, element) => {

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


                 // console.log("TITLE: ", title, "\n");
                 // console.log("TEXT: ", summary);
                 // console.log("LINK: ", link);
             });
                return results;
            // console.log('is it running here?',results);
         });
}

module.exports = scrape;
