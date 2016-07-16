// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [
	{
		quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
		source: "Lionel Messi",
	},
	{
		quote: "When the power of love overcomes the love of power the world will know peace.",
		source: "Jimi Hendrix"
	},
	{
		quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
		source: "Mahatma Gandhi",
	},
	{
		quote: "He who is not courageous enough to take risks will accomplish nothing in life.",
		source: "Muhammad Ali",
	},
	{
		quote: "Life's not about how hard of a hit you can give... It's about how many you can take, and still keep moving forward.",
		source: "Sylvester Stallone",
		citation: "Rocky Balboa",
		year: 1976
	},
	{
		quote: "If you can dream it, you can do it.",
		source: "Walt Disney",
	},
	{
		quote: "Whether you think you can, or you think you can't--you're right.",
		source: "Henry Ford",
	},
	{
		quote: "Fail fast and restart.",
		source: "Anonymus",
	}
];
/* Change background color*/ 
function changeBackgroundColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    /* Choosing 6 items between the array : letters and 
	   adding it to the string: color */
    for (var i = 0; i < 6; i++ ) {
    	var randomColor = letters[Math.floor(Math.random() * letters.length)];
        color += randomColor;
    }
    /* Change the background color in the css to the random color of the function 
       that will be an hexadecimal color */
    document.body.style.backgroundColor = color;
}

var random;

/* Getting a random quote */
function getRandomQuote() {
	// Getting a random number between 0 and quotes.length
	random = Math.floor(Math.random() * quotes.length);
	// Returning a random quote of the array: quotes
	return quotes[random];
}

/* Printing the random quote */
function printQuote(){
	// Assigning to the quoteToPrint variable the random quote
	var quoteToPrint = getRandomQuote();
	// Condition to be sure that quotes is not empty and after assigning the HTML
	if (quotes.length > 0) {
	var quoteRandom = "<p class='quote'>" + quoteToPrint.quote + "</p>";
	quoteRandom += "<p class='source'>" + quoteToPrint.source;
	if (quoteToPrint.citation){
		quoteRandom += "<span class='citation'>" + quoteToPrint.citation + "</span>";
		if(quoteToPrint.year) {
		quoteRandom += "<span class='year'>" + quoteToPrint.year + 
					  "</span>" + "</p>";
	}

	}
	else if(quoteToPrint.year) {
		quoteRandom += "<span class='year'>" + quoteToPrint.year + "</span>" + "</p>";
	}
	else {
		quoteRandom += "</p>";
	}
	// Wwriting inside the quote-box element my HTML defined before
	document.getElementById('quote-box').innerHTML = quoteRandom;
	// Calling the function to change the backgroung color
	changeBackgroundColor();
	// Removing from the quotes array the last quote displayed
	quotes.splice(random, 1);
	}
	// When the quotes array is empty show the following message
	else {
		document.getElementById('quote-box').innerHTML = "<h1 style='text-align: center;'>"+ '"All the quotes have been displayed"' + "</h1>";
	}

}
// Getting a different quote every 30 seconds
var count = 0;
var intervallo = setInterval( function(){ 
	printQuote(); 
	count++; 
	// After display: "All the quotes have been displayed" breaking interval.
	if (count === 9) { 
		clearInterval(intervallo); 
		return;
	}
}, 30000);
