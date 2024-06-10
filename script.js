//................. HAMSTER ......................//

const Hamster_Container = document.createElement("section");
Hamster_Container.setAttribute("class", "Hamster_Container");
document.body.append(Hamster_Container);
//..............................
const Hamster_Registration_Box = document.createElement("div");
Hamster_Registration_Box.setAttribute("class", "Hamster_Registration_Box");
Hamster_Registration_Box.innerHTML = `
<img src = "./assets/hamster-coin.png"/>
<h1>Добро Пожаловать!</h1>
<input type= "text" pleaceholder="Введите Имя" id = "name"/>
<input type = "text" pleaceholder = "Введите Фамилия" id = "lastname" />
<button id = "registration_Btn">Продолжить</button>
`;
//......................................
const Hamster_Close_Box = document.createElement("div");
Hamster_Close_Box.setAttribute("class", "Hamster_Close_Box");
Hamster_Close_Box.innerHTML = `
<div><button><i class="fa-solid fa-xmark"></i></button> <h1>hamster combat</h1> </div><button><i class="fa-solid fa-ellipsis-vertical"></i></button>
`;
//....................................
const User_stock_exchange_box = document.createElement("div");
User_stock_exchange_box.setAttribute("class", "User_Stock_Exchange_Box");
User_stock_exchange_box.innerHTML = `
<div><i class="fa-regular fa-user"></i> <h3>Arman Mnacakanov (CEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;
//............................
const Hamster_Box = document.createElement("div");
Hamster_Box.setAttribute("class", "Hamster_Box");
const Hour_Coin_Box = document.createElement("div");
Hour_Coin_Box.setAttribute("class", "Hour_Coin_Box");
var profit = 1;
Hour_Coin_Box.innerHTML = `
<div><span>прибыль за тап</span> <span class = "Profit"><img src="./assets/hamster-coin.png"/>+${profit}</span></div>
<div><span>прибыль для апа</span> <span>10K</span></div>
<div><span>прибыль в час</span> <span><img src="./assets/hamster-coin.png"/>+500K</span></div>
`;
const Hamster_Coin_Count = document.createElement("div");
Hamster_Coin_Count.setAttribute("class", "Hamster_Coin_Count");
var CoinCount = 0;
//.....................................................
Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
//...........................................
const Hamster_Level_Box = document.createElement("div");
Hamster_Level_Box.setAttribute("class", "Hamster_Level_Box");
var levelCount = 5000;
var LevelValue = 1;
var levelname = "Bronze";
Hamster_Level_Box.innerHTML = `
<div><span class = "levelname">${levelname} <i class="fa-solid fa-angle-right"></i></span> <span class = 'level'><span>level</span> ${LevelValue}/10</span></div>
<div><progress value="0" max="${levelCount}"></progress></div>
`;
var level = Hamster_Level_Box.querySelector("progress");
//....................................
const Hamster = document.createElement("button");
Hamster.innerHTML = ` <img src="./assets/bronze.png" alt="Hamster">`;
Hamster.setAttribute("class", "Hamster");
var energyCount = 1500;
let energyInterval;
Hamster.addEventListener("click", (event) => {
  energy -= profit;
  if (energy >= 0) {
    CoinCount += profit;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}`;
    level.value = Math.min(level.value + profit, level.max);
    //........................................
    if (level.value >= level.max) {
      alert("Новый Уровень!!!!");
      LevelValue += 1;
      Hamster_Level_Box.querySelector(
        ".level"
      ).innerHTML = `<span>level</span> ${LevelValue}/10`;
      level.value = 0;
      level.max = levelCount += 20000;
      energyCount += 500;
      energy += 500;
      profit += 1;
      Hamster_Energy_Boost_Box.querySelector(
        "button"
      ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
      profit += 1;
      //................................
      const levelNames = [
        "Bronze",
        "Silver",
        "Gold",
        "Platinum",
        "Diamond",
        "Epic",
        "Legendary",
        "Master",
        "Grandmaster",
        "Lord",
      ];
      if (LevelValue <= 10) {
        levelname = levelNames[LevelValue - 1];
        Hamster_Level_Box.querySelector(
          ".levelname"
        ).innerHTML = `${levelname} <i class="fa-solid fa-angle-right"></i>`;
        Hamster.innerHTML = `<img src="./assets/${levelname.toLowerCase()}.png" alt="Hamster">`;
      }
    }
    //........................................
    const feedbackSpan = document.createElement("span");
    feedbackSpan.textContent = `+${profit}`;
    feedbackSpan.style.position = "absolute";
    feedbackSpan.style.animation = "show .5s ease forwards";
    Hamster.append(feedbackSpan);
    //...................................
    setTimeout(() => {
      feedbackSpan.style.animation = "";
      feedbackSpan.remove();
    }, 1000);
    Hamster_Coin_Count.querySelector("span").textContent = CoinCount;
    Hamster_Energy_Boost_Box.querySelector("span").textContent = energy;
  } else {
    alert("Недостаточно энергии!");
    Hamster.disabled = true;
    const energyInterval = setInterval(() => {
      energy += 3;
      Hamster_Energy_Boost_Box.querySelector(
        ".energy"
      ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
      //.................................
      if (energy >= energyCount) {
        clearInterval(energyInterval);
        Hamster.disabled = false;
      }
    }, 1000);
  }
});
//....................................
const Hamster_Energy_Boost_Box = document.createElement("div");
Hamster_Energy_Boost_Box.setAttribute("class", "Hamster_Energy_Boost_Box");
var energy = 1500;
//................................
Hamster_Energy_Boost_Box.innerHTML = `
<button class = "energy"><i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}</button>
<button id = "Boost"><img src = "./assets/boost.png"/> boost</button>
`;
//..................................
const Boost_Box = document.createElement("div");
Boost_Box.style.display = "none";
Boost_Box.setAttribute("class", "Boost_Box");
Boost_Box.innerHTML = `
<div>
<button id="Boost_Box_Close_Btn"><i class="fa-solid fa-arrow-left"></i></button>
<div><span>Ваш Баланс</span></div>
<div><h1><img src = "./assets/hamster-coin.png"/>${CoinCount}</h1></div>
</div>

<div>
<div><span>Усилители</span></div>
<div><img src ="./assets/tap.png"/><button id ="multitap"><div><span>multitap</span><span class = "TapPrice"><img src ="./assets/hamster-coin.png"/>${TapPrice}</span></div></button><i class="fa-solid fa-angle-right"></i></div>
<div><img src ="./assets/energy.png"/><button id ="energy"><div><span>energy limit</span><span class = "EnergyPrice"><img src ="./assets/hamster-coin.png"/>${EnergyPrice}</span></div></button><i class="fa-solid fa-angle-right"></i></div>
</div>
`;
Hamster_Container.append(Boost_Box);
//.....................................
document.getElementById("Boost_Box_Close_Btn").addEventListener("click", () => {
  Boost_Box.style.display = "none";
});
//..............................................
const List = document.createElement("div");
List.setAttribute("class", "List");
List.innerHTML = `
<ul>
<li><a href = "#"><img src = "./assets/binance.png"/>exchange</a></li>
<li><a href = "#"><img src = "./assets/mine.png"/>mine</a></li>
<li><a href = "#"><i class="fa-solid fa-users"></i> friends</a></li>
<li><a href = "#"><i class="fa-solid fa-coins"></i> earn</a></li>
<li><a href = "#"><img src = "./assets/hamster-coin.png"/>airdrop</a></li>
</ul>
`;
Hamster_Box.append(
  Hour_Coin_Box,
  Hamster_Coin_Count,
  Hamster_Level_Box,
  Hamster,
  Hamster_Energy_Boost_Box,
  List
);
Hamster_Container.append(
  Hamster_Registration_Box,
  Hamster_Close_Box,
  User_stock_exchange_box,
  Hamster_Box
);
//.......................................
Hamster_Box.style.display = "none";
document.getElementById("registration_Btn").addEventListener("click", () => {
  const nameValue = document.getElementById("name").value;
  const nameValueinput = document.getElementById("name");
  const lastnameValue = document.getElementById("lastname").value;
  const lastnameValueinput = document.getElementById("lastname");
  if (nameValue == "" || lastnameValue == "") {
    alert("Заполните поле!");
    nameValueinput.style.borderColor = "red";
    lastnameValueinput.style.borderColor = "red";
    nameValueinput.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.56)";
    lastnameValueinput.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.56)";
    setTimeout(() => {
      nameValueinput.style.borderColor = "transparent";
      lastnameValueinput.style.borderColor = "transparent";
      nameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    }, 1000);
    nameValueinput.addEventListener("focus", () => {
      nameValueinput.style.borderColor = "rgb(251, 255, 0)";
      nameValueinput.style.boxShadow = "0 0 20px rgba(255, 166, 0, 0.56)";
    });
    lastnameValueinput.addEventListener("focus", () => {
      lastnameValueinput.style.borderColor = "rgb(251, 255, 0)";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(255, 166, 0, 0.56)";
    });
    nameValueinput.addEventListener("blur", () => {
      nameValueinput.style.borderColor = "transparent";
      nameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    });
    lastnameValueinput.addEventListener("blur", () => {
      lastnameValueinput.style.borderColor = "transparent";
      lastnameValueinput.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.249)";
    });
  } else {
    Hamster_Registration_Box.style.display = "none";
    const Bonus_Box = document.createElement("div");
    Bonus_Box.setAttribute("class", "Bonus_Box");
    Bonus_Box.innerHTML = `
    <img src = "./assets/hamster-coin.png"/>
    <h2>Спасибо за регистрацию</h2>
    <span>Мы с радостью дарим вам бонус на <span><img src = "./assets/hamster-coin.png"/>500 монет</span></span>
    <h3>приятного майнинга!</h3>
    <button id = "contunione_btn">продолжыть</button>
    `;
    User_stock_exchange_box.innerHTML = `
<div><img src = "./assets/icon.png"/> <h3>${nameValue} ${lastnameValue} (CEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;
    Hamster_Container.append(Bonus_Box);
    //........................................
    document.getElementById("contunione_btn").addEventListener("click", () => {
      Bonus_Box.style.display = "none";
      Hamster_Box.style.display = "flex";
      CoinCount = 500;
      Boost_Box.querySelector(
        "h1"
      ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
      Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
      level.value = Math.min(level.value + CoinCount, level.max);
    });
  }
});
//.............................
const MultitapLevel_Box = document.createElement("div");
MultitapLevel_Box.style.display = "none";
MultitapLevel_Box.setAttribute("class", "MultitapLevel_Box");
//...............................................
const EnergyLevel_Box = document.createElement("div");
EnergyLevel_Box.style.display = "none";
EnergyLevel_Box.setAttribute("class", "EnergyLevel_Box");
var TapPrice = 1000;
var EnergyPrice = 1000;
Boost_Box.querySelector(
  ".TapPrice"
).innerHTML = `<img src ="./assets/hamster-coin.png"/>${TapPrice}K`;
Boost_Box.querySelector(
  ".EnergyPrice"
).innerHTML = `<img src ="./assets/hamster-coin.png"/>${EnergyPrice}K`;
//............................................
MultitapLevel_Box.innerHTML = `
    <button class ="close_btn"><i class="fa-solid fa-xmark"></i></button>
    <img src = "./assets/tap.png"/>
    <h1>multitap</h1>
    <p>увеличивеат количество монет которое вы можете заработать за одно нажатие</p>
    <h3>+1 ьщнет за тап для 1 уровня</h3>
    <h2><img src = "./assets/hamster-coin.png"/> ${TapPrice}</h2>
    <button id ="Tap_Buy_Btn">получить</button>
    `;
EnergyLevel_Box.innerHTML = `
    <button class ="close_btn2"><i class="fa-solid fa-xmark"></i></button>
    <img src = "./assets/energy.png"/>
    <h1>energy limit</h1>
    <p>увеличивеат количество энерии</p>
    <h3>+500 энергии для 1 уровня</h3>
    <h2><img src = "./assets/hamster-coin.png"/> ${EnergyPrice}</h2>
    <button id ="Energy_Buy_Btn">получить</button>
    `;
document.body.append(MultitapLevel_Box, EnergyLevel_Box);
//...................................
document.getElementById("Boost").addEventListener("click", () => {
  Boost_Box.style.display = "flex";
});
//.............................
document.getElementById("Tap_Buy_Btn").addEventListener("click", () => {
  if (CoinCount >= TapPrice) {
    profit += 1;
    Hour_Coin_Box.querySelector(
      ".Profit"
    ).innerHTML = `<img src="./assets/hamster-coin.png"/>+${profit}`;
    CoinCount -= TapPrice;
    Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
    MultitapLevel_Box.style.display = "none";
    TapPrice += 9000;
    Boost_Box.querySelector(
      ".TapPrice"
    ).innerHTML = `<img src ="./assets/hamster-coin.png"/>${TapPrice}K`;
    MultitapLevel_Box.querySelector(
      "h2"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/> ${TapPrice}`;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
    level.value = Math.min(level.value - TapPrice, level.max);
  } else {
    alert("Недостаточно Баланса!!!");
  }
});
//...............................
document.getElementById("Energy_Buy_Btn").addEventListener("click", () => {
  if (CoinCount >= EnergyPrice) {
    energy += 500;
    energyCount += 500;
    CoinCount -= EnergyPrice;
    EnergyPrice += 9000;
    EnergyLevel_Box.style.display = "none";
    Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
    Boost_Box.querySelector(
      ".EnergyPrice"
    ).innerHTML = `<img src ="./assets/hamster-coin.png"/>${EnergyPrice}K`;
    EnergyLevel_Box.querySelector(
      "h2"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/> ${EnergyPrice}`;
    Hamster_Energy_Boost_Box.querySelector(
      ".energy"
    ).innerHTML = `<i class="fa-solid fa-bolt"></i><span>${energy}</span> / ${energyCount}`;
    Boost_Box.querySelector(
      "h1"
    ).innerHTML = `<img src = "./assets/hamster-coin.png"/>${CoinCount}</h1>`;
    level.value = Math.min(level.value - EnergyPrice, level.max);
  } else {
    alert("Недостаточно Баланса!!!");
  }
});
document.getElementById("multitap").addEventListener("click", () => {
  MultitapLevel_Box.style.display = "flex";
  document.querySelector(".close_btn").addEventListener("click", () => {
    MultitapLevel_Box.style.display = "none";
  });
});
document.getElementById("energy").addEventListener("click", () => {
  EnergyLevel_Box.style.display = "flex";
  document.querySelector(".close_btn2").addEventListener("click", () => {
    EnergyLevel_Box.style.display = "none";
  });
});
//.................................
