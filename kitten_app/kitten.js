function Kitten(kittenNum, imgSrc){
  this.kittenNum = kittenNum;
  this.imgSrc = imgSrc;
  this.win = 0;
  this.loss = 0;
}

var kPics = [];

function altNum(numOne, numTwo){
  var newNUm;
  do {
   newNum = Math.floor(Math.random() * kPics.length);
  } while(newNum === numOne || newNum === numTwo);
  return newNum;
}


$.ajax({
  url: "https://api.imgur.com/3/album/Mk6Br.json",
  headers: {
    "Authorization": "Client-ID dc49bb5cee7f345"
  }
})
.done(function(res) {
  var catImages = res.data.images;
  //Mk6Br.json = res.data;
  for (var i = 0; i < catImages.length; i++) {
    kPics.push(new Kitten(i, catImages[i].link));
  }
  init();
});

var tracker = function(win, loss) {
  for(j = 0; j < kPics.length; j++) {
    if(win === kPics[j].win){
      kPics[j].win ++;
    }
    else {
      kPics[i].loss ++;
    }
  }
}

var init = function(){
  var numOne = Math.floor(Math.random() * kPics.length);
  var numTwo = altNum(numOne, numTwo);

  $("#pic_1").attr("src", kPics[numOne].imgSrc);
  $("#pic_2").attr("src", kPics[numTwo].imgSrc);
  $("#wOne").text("Win: " + kPics[numOne].win);
  $("#lOne").text("Loss: " + kPics[numOne].loss);
  $("#wTwo").text("Win: " + kPics[numTwo].win);
  $("#lTwo").text("Loss: " + kPics[numTwo].loss);


  $("#pic_1").on("click", function(){
    kPics[numOne].win += 1;
    kPics[numTwo].loss += 1;
    numTwo = altNum(numOne, numTwo);
    $("#pic_2").attr("src", kPics[numTwo].imgSrc);
    $("#wTwo").text("Win: " + kPics[numTwo].win);
    $("#lTwo").text("Loss: " + kPics[numTwo].loss);
  });

  $("#pic_2").on("click", function(){
    kPics[numTwo].loss += 1;
    kPics[numOne].win += 1;
    numOne = altNum(numOne, numTwo);
    $("#pic_1").attr("src", kPics[numOne].imgSrc);
    $("#wOne").text("Win: " + kPics[numOne].win);
    $("#lOne").text("Loss: " + kPics[numOne].loss);
  });
}










//Thanks to Tristan for his help this morning before class.
//Refactoring Tristan and Kate's code with Brook helped me better understand where I was going wrong.
