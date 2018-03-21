// Unique word count of the submitted text
// function uniqueWords(text) {

// }
 // Average word length in characters of the submitted text
// your code here!

// removes punctuation, standardizes to lower case, sorts
function sortText(rawText) {
	console.log(rawText);
	// console logging twice - don't know why - from Max
	return rawText.toLowerCase().split(/[ ,!.";:-]+/).sort();
}

// Total word count of the submitted text
function getWordCount(rawText){
	// this returns an array of sorted text
	var sortedText = sortText(rawText); 
	// this counts the length of the array to return the word count
	var wordCount = sortedText.length;
	console.log(wordCount);
	return wordCount;
	
}



// When user clicks button, JS runs the function
function formSubmit(){
	$('form').submit(function(event){
		event.preventDefault();
// returns text entered from form
		var rawText = $('.js-raw-text').val();
		sortText(rawText);
		// getWordCount(rawText);
// unhides .hidden class
		$('.js-text-report').removeClass('hidden');
// displays results
		var wordCount = getWordCount(rawText);
		$('.js-word-count').text(wordCount);
	});
}

// runs function when page loads
$(function() {
	formSubmit();
});
