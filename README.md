WebScraper

  This repository creates a non-configurable web-scraper using NodeJS

Getting Started

After cloning the git repo and navigating to the root folder, enter the following commands into the command line:

  1) npm install
  2) node server.js

Then navigate to 'localhost:3001' in your browser. A file called 'scraped.json' will be created and saved in the root directory.

Other Examples

The current server.js is hardcoded to look up the word test and check it's difficulty rating on Dictionary.com. Any other Dictionary.com url for a word can be used instead.

Below is a different example that can help find the release year of a movie on IMDB. The url is hardcoded. Any other IMDB.com url for a movie can be used instead.

The following can replace line 8 in server.js

var url = 'http://www.imdb.com/title/tt0133093/'

The following can replace lines 13 through 16 in server.js

var json = {title: "", release: ""}
var releaseYear = $("#titleYear").children()[0].children[0].data
var movieTitle = $(".title_wrapper").children()[0].children[0].data
json.release = releaseYear
json.title = movieTitle
