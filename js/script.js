var quotes = [ {
  "quote": "The best way to pay for a lovely moment is to enjoy it.",
  "author": "Richard Bach"
}, {
  "quote": "Happiness depends upon ourselves.",
  "author": "Aristotle"
}, {
  "quote": "The Constitution only gives people the right to pursue happiness. You have to catch it yourself.",
  "author": "Benjamin Franklin"
}, {
  "quote": "Life is 10% what happens to you and 90% how you react to it.",
  "author": "Charles R. Swindoll"
}, {
  "quote": "In order to succeed, we must first believe that we can.",
  "author": "Nikos Kazantzakis"
}, {
  "quote": "If you can dream it, you can do it.",
  "author": "Walt Disney"
}, {
  "quote": "Keep you eyes on the stars, and your feet on the ground.",
  "author": "Theodore Roosevelt"
}, {
  "quote": "Problems are not stop signs, they are guidelines.",
  "author": "Robert H. Schuller"
}, {
  "quote": "The secret to getting ahead is getting started.",
  "author": "Mark Twain"
}, {
  "quote": "When something is important enough, you do it even if the odds are not in your favor.",
  "author": "Elon Musk"
}, {
  "quote": "You can't build a reputation on what you are going to do.",
  "author": "Henry Ford"
} ];

var twitter = {
  "endpoint": "https://twitter.com/intent/tweet",
  "via": "RandomlyKnighted"
};

// Get a random quote
var GetRandomQuote = function() {

  var index = Math.floor( Math.random() * quotes.length );

  if ( quotes[ index ].quote === $( "#quote" ).html() ) {
    return GetRandomQuote();
  } else {
    return quotes[ index ];
  }

};

// Show a new random quote to the user
$( "#newQuote" ).click( function() {

  var quotation = GetRandomQuote();

  $( "#quote" ).html( quotation.quote );
  $( "#author" ).html( " - " + quotation.author );
} );

// Tweet the quote
$( "#twitterBtn" ).click( function() {

  var quotation = $( "#quote" ).html() + $( "#author" ).html();

  var link = twitter.endpoint + "?text=" + encodeURI( quotation ) + " @" + encodeURI( twitter.via );

  $( "#twitterBtn" ).attr( "href", link );
} );

// Get a random quote when the page loads
$( document ).ready( function() {

  var quotation = GetRandomQuote();

  $( "#quote" ).html( quotation.quote );
  $( "#author" ).html( " - " + quotation.author );
} );