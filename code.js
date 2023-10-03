var hashrate = 10;
var capcoin=0;
var usdBalance = 0;
var minerMult=1;
var capcrit=0;
var left = 100;
var capMult = 1;
var checkMine=0;
var time = 1000 / hashrate;
var capran = randomNumber(1, 6);
onEvent("gameStart", "click", function(event) {
  setScreen("How2Play");
});
onEvent("startBtn", "click", function(event) {
setScreen("gameScreen");
});
onEvent("backSign", "click", function(event) {
  setScreen("gameScreen");
});
onEvent("shopBtn", "click", function(event) {
  setScreen("cryptoShop");
});
onEvent("mineMan", "click", function(event) {
  if (capcrit==1) {
    capran = randomNumber(1, 20);
    if (capran==20) {
      capCheck(1000,capMult);
    } else {
      capCheck(100,capMult);
    }
  } else {
    var tempRand = randomNumber(1, 100);
    if (tempRand==50) {
      capCheck(25,capMult);
    } else {
      capCheck(10,capMult);
    }
  }
  CPCVal();
});
onEvent("Buygraphicscard", "click", function(event) {
  if (capcoin>= 25) {
    hideElement("Buygraphicscard");
    capCheck(-25,1);
    checkMine++;
    mining(1);
    CPCVal();
  }
});
onEvent("Buyasicminer", "click", function(event) {
  if (capcoin>= 1000) {
    hideElement("Buyasicminer");
    capCheck(-1000,1);
    checkMine++;
    mining(10);
    CPCVal();
  }
});
onEvent("Buyminingfarm", "click", function(event) {
  if (capcoin>= 10000) {
    hideElement("Buyminingfarm");
    capCheck(-10000,1);
    checkMine++;
    mining(100);
    CPCVal();
  }
});
onEvent("Buyqc", "click", function(event) {
  if (capcoin>= 100000) {
    hideElement("Buyqc");
    capCheck(-100000,1);
    checkMine++;
    mining(1000);
    CPCVal();
  }
});
onEvent("convertbutton", "click", function(event) {
  if (capcoin >= 1000) {
    var usdNew = capcoin/1000;
    capCheck(capcoin,-1);
    capcoin = 0;
    usdBalance = usdNew+usdBalance;
  }
  CPCVal();
});
onEvent("Currencyconv", "click", function(event) {
  setScreen("currencyexchange");
});
onEvent("ConBackBtn", "click", function(event) {
  setScreen("gameScreen");
});
onEvent("multMan", "click", function(event) {
  if (usdBalance>=10) {
    capMult = capMult*2;
    usdCheck(10);
  }
});
onEvent("multHash", "click", function(event) {
  if (usdBalance >= 50 && !(left == 0)) {
    usdCheck(50);
    hashrate = hashrate+2;
    left = left-1;
    setText("reman", left +" left");
    if (left==0) {
      hideElement("multHash");
    }
  }
});
onEvent("multAllBtn", "click", function(event) {
  if (usdBalance>=100) {
    minerMult = minerMult*2;
    usdCheck(100);
  }
});
onEvent("increaseChance", "click", function(event) {
  if (capcrit != 1 && usdBalance >= 5) {
    hideElement("increaseChance");
    capcrit = 1;
    usdCheck(5);
  }
});
onEvent("winBtn", "click", function(event) {
  if (capcoin>=1000000 && checkMine==4) {
    reset();
  }
});
onEvent("restartBtn", "click", function(event) {
  setScreen("gameScreen");
});
onEvent("menuBtn", "click", function(event) {
  setScreen("MainMenu");
});
setInterval(function() {
  setText("YourCapBal", capcoin);
  setText("UsdEx", Math.round(capcoin/1000));
}, 1000);
function CPCVal() {
  setText("moneyCap", "CPC "+capcoin);
  setText("UsdHold", usdBalance);
  setText("Hashrate", "kH/s "+hashrate);
}
function capCheck(balance,multi) {
  capcoin=capcoin+balance * multi;
}
function usdCheck(balance) {
  usdBalance = usdBalance - balance;
}
function mining(minerGive) {
      setInterval(function (){
        capcoin=capcoin+minerGive * minerMult;
        CPCVal();
}, time);
}
function reset() {
  showUi();
  val();
  setScreen("winScreen");
}
function showUi() {
  CPCVal();
  setText("reman", left +" left");
  showElement("increaseChance");
  showElement("multHash");
  showElement("multMan");
  showElement("multAllBtn");
  showElement("Buyasicminer");
  showElement("Buygraphicscard");
  showElement("Buyminingfarm");
  showElement("Buyqc");
}
function val() {
  hashrate = 10;
  capcoin=0;
  usdBalance = 0;
  minerMult=1;
  capcrit=0;
  left = 100;
  capMult = 1;
}
