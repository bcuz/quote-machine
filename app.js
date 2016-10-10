var go = function() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log(randomColor);
  $("body").css({"background-color": "#" + randomColor})
  $("a").css("background-color",  "#" + randomColor)

  tagged_url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
// var request = {
//     // tagged: tags,
//     site: 'stackoverflow'
//     // order: 'desc',
//     // sort: 'creation'
//   };
  $.ajax({
    url: tagged_url,
    cache: false,
    // data: request,
    dataType: "json",//use jsonp to avoid cross origin issues
    type: "GET",
  })
  .done(function(a){ //this waits for the ajax to return with a succesful promise object
      console.log(a);

      var author = $("div").find(".author");
      author.text("- " + a[0].title)

      var quote = $("div").find(".quote");
      // var a = a.replace(/<p>/g, "");

      // have to replace &#8211; &#8211 too
      var content = a[0].content.replace(/<p>|<\/p>/g, "");
      var content = content.replace(/&#8217;/g, "'");
      quote.text(content)
  })

}

go()

$("a").click(function() {
  go();
})