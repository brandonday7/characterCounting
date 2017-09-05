var args = process.argv;
countLetters(args[2]);

function countLetters(inputString)
{
  var lettersInString = [];
  for (var i = 0; i < inputString.length; i++)
  {
    var currentLetter = inputString[i];
    var letterObject = {letter: currentLetter, occurences: 1};
    console.log(letterObject);/*
    if (alreadySeen(inputString[i]) > 0)
    {
      lettersInString[alreadySeen]++;
    }
    else
    {

    } */
  }

}



/*

look at current letter
has letter been seen yet?
  yes: incrememnt occurrences
  no: push into seenLetters and increment occurences


*/