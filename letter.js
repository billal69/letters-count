
function lettersCount(str1)
{
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lcount = 0;
  
  for(let x = 0; x < str1.length ; x++)
  {
    if (letters.indexOf(str1[x]) !== -1)
    {
      lcount += 1;
    }
  
  }
  return lcount;
}


function vowel_count(str2)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(let x = 0; x < str2.length ; x++)
  {
    if (vowel_list.indexOf(str2[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
