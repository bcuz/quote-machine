var go = function() {

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

      var content = a[0].content.replace(/<p>|<\/p>/g, "");
      quote.text(content)
  })

}

go()

$("button").click(function() {
  go();
})