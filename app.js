let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById('user-score');
const compscore_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getcomputerchoice()
{
  const choices = ['r','p','s'];
  const randomnumber = Math.floor(Math.random()*3);
return choices[randomnumber];
}

function convert(letter){
  if (letter === "r")return "Rock";
  if(letter === "p")return "Paper";
  return "Scissors";
}

function win(userchoice,computerchoice) {
  userscore++;
  userscore_span.innerHTML = userscore;
  compscore_span.innerHTML = compscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convert(userchoice)}${smalluserword} beats ${convert(computerchoice)}${smallcompword}. you win!`;
  document.getElementById(userchoice).classList.add('green-glow');
  setTimeout(function () {document.getElementById(userchoice).classList.remove('green-glow')},500);


}

function lose(userchoice,computerchoice) {
  compscore++;
  userscore_span.innerHTML = userscore;
  compscore_span.innerHTML = compscore;
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convert(userchoice)}${smalluserword} loses to ${convert(computerchoice)}${smallcompword}. you lose!`;
  document.getElementById(userchoice).classList.add('red-glow');
  setTimeout(function () {document.getElementById(userchoice).classList.remove('red-glow')},500);
}

function draw(userchoice,computerchoice) {

  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convert(userchoice)}${smalluserword} equals ${convert(computerchoice)}${smallcompword}. it's a draw!`;
  document.getElementById(userchoice).classList.add('gray-glow');
  setTimeout(function () {document.getElementById(userchoice).classList.remove('gray-glow')},500);
}



function game(userchoice) {
 const computerchoice = getcomputerchoice();
 switch (userchoice + computerchoice){
   case "rs":
   case "pr":
   case "sp":
    win(userchoice,computerchoice);
    break;
   case "rp":
   case "ps":
   case "sr":
    lose(userchoice,computerchoice);
    break;
   case "rr":
   case "pp":
   case "ss":
    draw(userchoice,computerchoice);
    break;

 }
}

function main() {
rock_div.addEventListener('click',function(){
  game("r");
})
paper_div.addEventListener('click',function(){
  game("p");
})
scissors_div.addEventListener('click',function(){
  game("s");
})
}
main();
