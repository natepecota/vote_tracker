function Kitten(kittenNum, imgSrc, win, loss){
  this.kittenNum = kittenNum;
  this.imgSrc = imgSrc;
  this.win = win;
  this.loss = loss;
}

var numOne, numTwo, win, loss, kPics = [];

function altNum(numOne, numTwo){
  var newNUm;
  do {
   newNum = Math.floor(Math.random() * kPics.length);
  } while(newNum === numOne || newNum === numTwo);
  return newNum;
}

for (var i = 1; i <= 14; i++) {
  kPics.push(new Kitten([i], "kitten_pics/kitten_" + [i] + ".jpg", 0, 0));
}

numOne = Math.floor(Math.random() * kPics.length);
numTwo = altNum(numOne, null);

$(function(){
  $("#pic_1").attr("src", kPics[numOne].imgSrc);
  $("#pic_2").attr("src", kPics[numTwo].imgSrc);
  win = kPics[numOne].win;

  $("#pic_1").click(function(){
    kPics[numOne].win += 1;
    kPics[numTwo].loss += 1;
    //console.log(kPics[numOne].win);
    //console.log(kPics[numOne].loss);
    //console.log(kPics[numTwo].win);
    //console.log(kPics[numTwo].loss);
    numTwo = altNum(numOne, numTwo);
    $("#pic_2").attr("src", kPics[numTwo].imgSrc);
  });

  $("#pic_2").click(function(){
    kPics[numTwo].loss += 1;
    kPics[numOne].win += 1;
    numOne = altNum(numOne, numTwo);
    $("#pic_1").attr("src", kPics[numOne].imgSrc);
  });
});

var tracker = function(win, loss) {
  for(l = 0; l < kPics.length; l++) {
    if(win === kPics[l].win){
      kPics[l].votes ++;
    }
  }
};

//Thanks to Tristan for his help this morning before class.
//Refactoring Tristan and Kate's code with Brook helped me better understand where I was going wrong.
