  var count = 0;
  var result = ['0','1','2','3','4','5','6','7','8'];
  var winCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]]

$('.box').on("click", getMoves);
function getMoves() {
  if ($(this).html() === ''){
    if ((count % 2) === 0) {
        $(this).html('<img class="pic1 animated rotateIn" src="pics/beds.png"></img>');
          currentPlace = parseInt(this.id);
            result[currentPlace] = 'X';
    } else {
        $(this).html('<img class="pic2 animated rollIn"src="pics/beer.png"></img>');
          currentPlace = parseInt(this.id);
            result[currentPlace] = 'O';
    }   
    count++;
    checkWin();
  }
}
function checkWin() {
  $.each(winCombo, function(index, value){
    if (result[value[0]]==result[value[1]] && result[value[1]]==result[value[2]]){
      $('.box').off();
        if (result[value[0]] == 'X'){
          $('.winSleep').addClass('sleepWin');
            $('.header').addClass('header1');            
        } else {
            $('.winBeer').addClass('beerWin');
            $('.header').addClass('header1');
            // $('.header').removeClass
        }
    } else if (count === 9){
      console.log('ty');
    }  else {
      console.log('dawg')
    }
  })
} 
$('.again').on("click", function(){
  count = 0;
  result = ['0','1','2','3','4','5','6','7','8'];
  var buttonArray = $('.box');
    $.each(buttonArray, function(index, butt){
      if (butt.children[0]) {
        butt.children[0].remove();
      }
    })
}) 
