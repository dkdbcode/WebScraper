var express = require('express')
var app = express()
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')

app.get('/webscraper', function(req, res){

  var url = 'http://www.dictionary.com/browse/test?s=t'

  request(url, function(error, response, html){

    if(!error){
      var $ = cheerio.load(html)
      var json = {word: "", difficulty:""}
      var word = $("#source-word-origin").children()[0].children[0].data
      var difficulty = $("#difficulty-box").attr('data-difficulty')
      json.word = word
      json.difficulty = difficulty
    }

    fs.writeFile('scraped.json', JSON.stringify(json, null, 4), function(err){
      console.log("File saved to scraped.json in directory")
    })

    res.send('Check console!')

  })

})

app.listen('3001')

exports = module.exports = app
