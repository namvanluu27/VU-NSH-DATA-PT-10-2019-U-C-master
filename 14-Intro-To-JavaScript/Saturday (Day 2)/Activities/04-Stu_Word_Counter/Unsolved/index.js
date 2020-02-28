function wordCount(myString) {
    var stringArray = myString.split(" ");
    
    var wordFrequency = {};

    for (var i = 0; i < stringArray.length; i++){
        var currentWord = stringArray[i]
        
        if (currentWord in wordFrequency) {
            wordFrequency[currentWord] += 1;
        }
        else {
            wordFrequency[currentWord] = 1;
        }
    }
    return wordFrequency;
}

var myString = "I yam what I yam and always will be what I yam";

console.log(wordCount(myString));