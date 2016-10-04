var go = function() {

//   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {



// });

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
      $("body").append("<p>" + a[0].title + "</p>")
  })

}

$("button").click(function() {
  go();
})