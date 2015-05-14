  var count = 0;
  var win = '';
  var result = ['0','1','2','3','4','5','6','7','8'];
  var winCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]]

$('.box').on("click", getMoves);

function getMoves() {
  if ((count % 2) === 0) {
      $(this).html('X');
        currentPlace = parseInt(this.id);
          result[currentPlace] = 'X';
  } else {
      $(this).html('O');
        currentPlace = parseInt(this.id);
          result[currentPlace] = 'O';
    }   
  count++;
  checkWin();
}
function checkWin() {
  $.each(winCombo, function(index, value){
    if (result[value[0]]==result[value[1]] && result[value[1]]==result[value[2]]){
      prompt('hope');
    } else {
      console.log('fail');

    }  
  })
}  
