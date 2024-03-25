var guess="1";
// generation of random value
var y = Math.floor(Math.random()*10 + 1);

function submit()
{
var x=document.getElementById("guessField").value;
if(x == y)
{
    alert("CONGRATULATIONS !!!"+playername+" YOU GUESSED IT RIGHT IN"
    +guess + "GUESS ");
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!!. TRY A SAMLLER NUMBER");
}
else
{
    guess++
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
}
}
// count of attempts
// until hit
  
function playAgain()
{
 y = Math.floor(Math.random() *10 + 1);
}

// function for the number sent by the user