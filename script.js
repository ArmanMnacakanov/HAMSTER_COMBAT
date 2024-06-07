//................. HAMSTER ......................//

const Hamster_Container = document.createElement("section");
Hamster_Container.setAttribute("class", "Hamster_Container");
document.body.append(Hamster_Container);
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
<div><img src = "./assets/1.jpg" /> <h3>Arman Mnacakanov (SEO)</h3></div>  <button><img src = "./assets/binance.png"/> Binance</button>
`;
//............................
const Hamster_Box = document.createElement("div");
Hamster_Box.setAttribute("class", "Hamster_Box");
const Hour_Coin_Box = document.createElement("div");
Hour_Coin_Box.setAttribute("class", "Hour_Coin_Box");
Hour_Coin_Box.innerHTML = `
<div><span>прибыль за тап</span> <span><img src="./assets/hamster-coin.png"/>+18</span></div>
<div><span>прибыль для апа</span> <span>100M</span></div>
<div><span>прибыль в час</span> <span><img src="./assets/hamster-coin.png"/>+481,96K</span></div>
`;
const Hamster_Coin_Count = document.createElement("div");
Hamster_Coin_Count.setAttribute("class", "Hamster_Coin_Count");
var CoinCount = 0;
Hamster_Coin_Count.innerHTML = `
<img src = "./assets/hamster-coin.png"/><span>${CoinCount}</span>
`;
//...........................................
const Hamster_Level_Box = document.createElement("div");
Hamster_Level_Box.setAttribute("class", "Hamster_Level_Box");
Hamster_Level_Box.innerHTML = `
<div><span>master <i class="fa-solid fa-angle-right"></i></span> <span><span>level</span> 8/10</span></div>
<div></div>
`;
//....................................
const Hamster = document.createElement("button");
Hamster.innerHTML = ` <img src="./assets/hamster.png" alt="Hamster">`;
Hamster.setAttribute("class", "Hamster");
Hamster.addEventListener("click", () => {
  CoinCount += 18;
  energy -= 18;
  const feedbackSpan = document.createElement("span");
  feedbackSpan.textContent = 18
  Hamster.append(feedbackSpan)
  feedbackSpan.style.animation = 'show .5s ease forwards';
  setTimeout(() => {
    feedbackSpan.style.animation = '';
    feedbackSpan.style.display = 'none'
  }, 1000);
  Hamster_Coin_Count.querySelector("span").textContent = CoinCount;
  Hamster_Energy_Boost_Box.querySelector("span").textContent = energy
});

//....................................
const Hamster_Energy_Boost_Box = document.createElement("div");
Hamster_Energy_Boost_Box.setAttribute("class", "Hamster_Energy_Boost_Box");
var energy = 9500;
Hamster_Energy_Boost_Box.innerHTML = `
<button><i class="fa-solid fa-bolt"></i><span>${energy}</span> / 9500</button>
<button><img src = "./assets/boost.png"/> boost</button>
`;
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
  Hamster_Close_Box,
  User_stock_exchange_box,
  Hamster_Box
);
