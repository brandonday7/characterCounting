var args = process.argv;
countLetters(args[2]);


function countLetters(inputString)
{
  var lettersInString = {};
  lettersInString[inputString[0]] = 1;
  for (var i = 1; i < inputString.length; i++)
  {
    if (lettersInString[inputString[i]])
    {
      lettersInString[inputString[i]]++;
    }
    else
    {
      lettersInString[inputString[i]] = 1;
    }
  }
  console.log(lettersInString);

}
