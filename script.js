let timer = 60;
let ranNu;
let Score = 0;
const whiteConteiner = document.querySelector("#Pbtm");


const Hitbuble = () => {
  ranNu = Math.floor(Math.random() * 10);
  document.querySelector("#HitValue").textContent = ranNu;
}

const makeBoble = () => {
  let Buble = "";
  for (i = 1; i <= 189; i++) {
    let ranNumer = Math.floor(Math.random() * 10);
    Buble += `  <div class="bubble">${ranNumer}</div>`
  }

  document.querySelector("#Pbtm").innerHTML = Buble;
}

const RunTimer = () => {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#setTimer").textContent = timer;
    }
    else {
      clearInterval(timer);
      whiteConteiner.innerHTML = ` <div>
      <h2>Game Over</h2>
      <p style="color:rgb(220,0,0);font-size:20px">Score: ${Score}</p>
      <button onclick="btnclick()">Restart</button>
      </div>  `;

    }

  }, 1000)
}

const increseScore = () => {
  Score += 10;
  document.querySelector("#scoreValue").textContent = Score;
}

whiteConteiner.addEventListener('click', (details) => {
  let clickedNo = details.target.textContent;

  if (clickedNo == ranNu) {
    increseScore();
    Hitbuble();
    makeBoble();

  }

})

const btnclick = ()=>{
  location.reload();
  
}


Hitbuble();
RunTimer();
makeBoble();

