/*steps

1-scoreCounter app : 
up and down voting 
counter calculate all votes
2.







*/

let oylar = document.getElementById("scoreCounter");
oylar.innerHTML = "0";
let oylarDegeri = 0;
checkScore();

function upVote() {
  oylarDegeri++;
  oylar.innerHTML =oylarDegeri;
  checkScore();
}

function downVote() {
  oylarDegeri--;
  oylar.innerHTML = oylarDegeri;
  checkScore();
}

function checkScore() {
  if (oylarDegeri < 0) {
    oylar.style.color = "#FF586C";
  } else if (oylarDegeri > 0) {
   oylar.style.color = "#6CC576";
  } else {
    oylar.style.color = "#666666";
  }
}