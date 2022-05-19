$(document).ready(function() {
  var quote;
  var author;
  function newQuote() {
    $('.card').css('background-image', 'url(https://source.unsplash.com/1080x720/?beach');
    $.getJSON('https://api.quotable.io/random', function(data) {
        var items = [];
        author = data["author"];
        quote = data["content"];
        if (author) {
            author = " -- " + author;
            $('#author').text(author);
        } else {
          $('#author').text("Unknown");
        }
        $('.quote').text(quote);
    });
  };

  newQuote();

  $('#get-quote').click(function(event) {
    event.preventDefault();
    newQuote();
  });

  $('#share-quote').click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " — " + author));
  });
});
