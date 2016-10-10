var newQuote = function() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  $("body, a").css({"background-color": "#" + randomColor})
  // $(".quote, .author").css("color", "#" + randomColor)

  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    cache: false,
    dataType: "json",//use jsonp to avoid cross origin issues
    type: "GET",
  })
  .done(function(result){ //this waits for the ajax to return with a succesful promise object

    // can put this stuff in a function
      var author = $("div").find(".author");
      author.text("- " + result[0].title)

      var quote = $("div").find(".quote");

      var content = result[0].content.replace(/<p>|<\/p>|<br \/> |<\/strong>|<strong>|<em>|<\/em>/g, "");
      var content = content.replace(/&#8217;|&#8216;/g, "'");
      var content = content.replace(/&#8211;/g, "-");

      quote.text(content)
  })

}

newQuote()

$(".new-quote").click(function() {
  newQuote();
})