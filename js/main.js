//Create variables here
const firebaseConfig = {
  apiKey: "AIzaSyB54pgEbg4tHcTaOey6STt-uQd_MVcb5II",
  authDomain: "petfood-5c633.firebaseapp.com",
  databaseURL: "https://petfood-5c633-default-rtdb.firebaseio.com",
  projectId: "petfood-5c633",
  storageBucket: "petfood-5c633.appspot.com",
  messagingSenderId: "200579137635",
  appId: "1:200579137635:web:1e6e801c04c73f49d23856"
};
firebase.initializeApp(firebaseConfig);
var dog, stock = [], lastFed = "not fed yet", foodtime = "loading...", money = "loading...", food = "loading...", foodtimetext = "loading...";
var dogImg, dogsitImg, doghappyImg, milkImg, bedroomdogImg, deaddogImg, vacationdogImg, foodstockImg, gardendogImg, injectiondogImg, lazydogImg, livingroomImg, runningdogImg, runningleftdogImg, vaccinationImg, washroomImg;
var database, reffoodtime, refmoney, reffood, refhome, refgameState, eventlistener, refinfo, reftoday, check;
var date = new Date(), hours, minutes, sec, consolidatedtime, todaydate, month, year, today, databasetime;
var time, gameState, latFed, feedMilk, refMilkStock, button1, button2, undoState, gameState, injection, cheatCode = 0;
var timer = 100;
var keypress = 0;
var x = 1020;
var y = 103;
var foodExist = 0;

function preload() {
  dogsitImg = loadImage("images/dog.png");
  doghappyImg = loadImage("images/happydog.png");
  milkImg = loadImage("images/milk.png");
  bedroomdogImg = loadImage("images/bedroom.png");
  deaddogImg = loadImage("images/deaddog.png");
  foodstockImg = loadImage("images/foodstock.png");
  gardendogImg = loadImage("images/garden.png");
  injectiondogImg = loadImage("images/injection.png");
  lazydogImg = loadImage("images/lazy.png");
  livingroomImg = loadImage("images/livingroom.png");
  runningdogImg = loadImage("images/running.png");
  runningleftdogImg = loadImage("images/runningleft.png");
  vacationdogImg = loadImage("images/vacationdog.png");
  vaccinationImg = loadImage("images/vaccination.png");
  washroomImg = loadImage("images/washroom.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1330, 600);
  todaydate = date.getDate();
  month = date.getMonth();
  month = month + 1;
  year = date.getFullYear();
  today = todaydate + ":" + month + ":" + year;
  dogImg = dogsitImg;
  dog = createSprite(500, 300);
  dog.scale = 0.5;
  reffood = new Feed();
  reffoodtime = new Foodtime();
  refmoney = new Money();
  refhome = new Home();
  refgameState = new Gamestate();
  refinfo = new Info();
  reffood.config();
  reffoodtime.config();
  refmoney.config();
  refgameState.config();
  reffoodtime.change(1);
  reftoday = database.ref('today/today');
  reftoday.on("value", (val) => {
    databasetime = val.val();
  });
  reffoodtime.check();
  button1 = createButton('FEED');
  button1.position(1290, displayHeight * 0.025);
  button2 = createButton('ADD FOOD');
  button2.position(1190, displayHeight * 0.025);
  if (gameState === "info") {
    gameState = "sit";
  }
  dog.setCollider("rectangle", -20, 0, 200, 700);
}

function draw() {
  if (check === 1) {
    gamestateFetch();
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    sec = date.getSeconds();
    mytime();
    mainGame();
    time = hours + ":" + minutes + ":" + sec;
    if (eventlistener !== sec) {
      timer = timer - 1;
    }
    eventlistener = sec;
    refhome.show();
    text("Press I to access cheat keys", 10, 550);
    text("Press R to reload the page", 10, 570);
    text("Press C to get the source code", 10, 590);
    mainGame();
  }
}

function mytime() {
  consolidatedtime = hours * 60;
  consolidatedtime = consolidatedtime + minutes;
  consolidatedtime = consolidatedtime * 60;
  consolidatedtime = consolidatedtime + sec;
}

function mainGame() {
  if (cheatCode === 0) {
    if (consolidatedtime > 79200 && consolidatedtime < 21600) {
      refgameState.change("bedroom");
      cheatCode = 1;
      setTimeout(10000, () => {
        cheatCode = 0;
      });
    } else if (consolidatedtime >= 39600 && consolidatedtime <= 46799) {
      refgameState.change("lazy");
      cheatCode = 1;
      setTimeout(10000, () => {
        cheatCode = 0;
      });
    } else if (consolidatedtime >= 46800 && consolidatedtime <= 47000) {
      refgameState.change("injection");
      cheatCode = 1;
      setTimeout(10000, () => {
        cheatCode = 0;
      });
    } else if (consolidatedtime >= 50400 && consolidatedtime <= 57600) {
      refgameState.change("livingroom");
      cheatCode = 1;
      setTimeout(10000, () => {
        cheatCode = 0;
      });
    } else if (consolidatedtime >= 61200 && consolidatedtime <= 68400) {
      refgameState.change("garden");
      cheatCode = 1;
      setTimeout(10000, () => {
        cheatCode = 0;
      });
    } else {
      refgameState.change(random(["sit", "running", "runningleft"]));
      cheatCode = 1;
      setTimeout(10000, () => {
        cheatCode = 0;
      });
      222
    }
  }
}

function keyPressed() {
  if (check === 1) {
    if (keyCode === 67) {
      window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-37";
    }
    if (keyCode === 82) {
      window.location.reload(false);
    }
    if (keyCode === 73) {
      if (gameState !== "info") {
        undoState = gameState;
        refgameState.change("info");
        refhome.hide();
      }
    }

    if (gameState !== "info") {
      if (keypress === 0) {
        undoState = gameState;
        if (keyCode === 70) {
          if (foodtime === 1 && food > 0) {
            if (keypress === 0) {
              // cheatCode = 1;
              lastFed = time;
              keypress = 1;
              upKey(-1);
            }
          }
        }
      }
      if (keyCode === 66) {
        // cheatCode = 1;
        refgameState.change("bedroom");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 68) {
        // cheatCode = 1;
        refgameState.change("dead");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 71) {
        // cheatCode = 1;
        refgameState.change("garden");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 72) {
        // cheatCode = 1;
        refgameState.change("vaccination");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 76) {
        // cheatCode = 1;
        refgameState.change("lazy");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 83) {
        // cheatCode = 1;
        refgameState.change("livingroom");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 39) {
        // cheatCode = 1;
        refgameState.change("running");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 37) {
        // cheatCode = 1;
        refgameState.change("runningleft");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 86) {
        // cheatCode = 1;
        refgameState.change("vacation");
        undogamestatetimer();
        keypress = 1;
      }
      if (keyCode === 87) {
        // cheatCode = 1;
        refgameState.change("washroom");
        undogamestatetimer();
        keypress = 1;
      }
    }
  }
}

function keyReleased() {
  if (check === 1) {
    if (gameState === "info") {
      undogamestate();
      button1 = createButton('FEED');
      button1.position(1290, displayHeight * 0.025);
      button2 = createButton('ADD FOOD');
      button2.position(1190, displayHeight * 0.025);
    }
    if (gameState === "info") {
      undoState = "sit";
    }
  }
}

function foodTime() {
  reffoodtime.config();
  if (foodtime === 1) {
    foodtimetext = "yes";
  } else if (foodtime === 0) {
    foodtimetext = "no";
  }
}

function upKey(l) {
  if (food % 1 === 0) {
    if (l !== 1) {
      feedMilk = createSprite(450, 400);
      feedMilk.addImage(milkImg);
      feedMilk.scale = 0.1;
      foodExist = 0;
      refgameState.change("happy");
      food = food + l;
      reffood.change(food);
      reffoodtime.change(0);
      setTimeout(function () {
        refgameState.change("sit");
        reffoodtime.change(1);
        feedMilk.destroy();
        keypress = 0;
      }, 5000);
      console.log("timer1");
    }
  }
}

function downKey(l) {
  if (food % 1 === 0 && food < 100) {
    if (l === 1) {
      foodExist = 0;
      food = food + l;
      money = money - 1;
      reffood.change(food);
      refmoney.change(money);
    }
  }
}

function resetTimer() {
  if (timer <= 0) {
    timer = 100;
    money = money + 5;
    refmoney.change(money);
  }
}

function gamestateFetch() {
  if (gameState === "sit") {
    dogImg = dogsitImg;
  } else if (gameState === "happy") {
    dogImg = doghappyImg;
  } else if (gameState === "bedroom") {
    dogImg = bedroomdogImg;
  } else if (gameState === "dead") {
    dogImg = deaddogImg;
  } else if (gameState === "garden") {
    dogImg = gardendogImg;
  } else if (gameState === "injection") {
    dogImg = injectiondogImg;
  } else if (gameState === "lazy") {
    dogImg = lazydogImg;
  } else if (gameState === "livingroom") {
    dogImg = livingroomImg;
  } else if (gameState === "running") {
    dogImg = runningdogImg;
  } else if (gameState === "runningleft") {
    dogImg = runningleftdogImg;
  } else if (gameState === "vacation") {
    dogImg = vacationdogImg;
  } else if (gameState === "vaccination") {
    injection = createSprite(900, 100);
    injection.addImage(injectiondogImg);
    injection.scale = 0.3;
    injection.velocityX = -3;
    injection.velocityY = 2;
    if (injection.isTouchingdog) {
      injection.destroy();
      dogImg = vaccinationImg;
    }
  } else if (gameState === "washroom") {
    dogImg = washroomImg;
  } else if (gameState === "info") {
    refinfo.show();
  }
}

function undogamestatetimer() {
  setTimeout(undogamestate, 5000);
}

function undogamestate() {
  refgameState.change(undoState);
  // cheatCode = 0;
  keypress = 0;
}
