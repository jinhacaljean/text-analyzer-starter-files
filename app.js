

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
 // Average word length in characters of the submitted text
 function avgLength(rawText){
 	// returns an array of sorted text
 	var sortedText = sortText(rawText);
 	var letterCount = sortedText.map(function(word){return word.length;
 	});
 	console.log(letterCount);
 	return letterCount;	

 }
function getAverage(rawText){
		var letterCount = avgLength(rawText);
		console.log(letterCount);
 		var totalCount = 0
 		for (i=0; i<letterCount.length; i++) {
 			totalCount += letterCount[i];
 		}
 		var averageCount = totalCount/letterCount.length;
 		console.log(averageCount);
 		return averageCount;
 	}

function countDistinctWords(rawText) {
	  var sortedText = sortText(rawText);
	  var distinctWords = [];
	  for (var i=0; i<sortedText.length; i++) {
	    if (distinctWords.indexOf(sortedText[i]) === -1) {
	      distinctWords.push(sortedText[i]);
	    }
	  }
	  return distinctWords.length;
}

// When user clicks button, JS runs the function
function formSubmit(){
	$('form').submit(function(event){
		event.preventDefault();
// returns text entered from form
		var rawText = $('.js-raw-text').val();
		sortText(rawText);
		avgLength(rawText);
		
// unhides .hidden class
		$('.js-text-report').removeClass('hidden');
// displays results
		var popcorn = getWordCount(rawText);
		$('.js-word-count').text(popcorn);
		// var averageCount = getAverage(rawText);
		// $('.js-word-length').text(averageCount);
		$('.js-word-length').text(getAverage(rawText));
		$('.js-unique-word').text(countDistinctWords(rawText));
	});
}

// runs function when page loads
$(function() {
	formSubmit();
});
