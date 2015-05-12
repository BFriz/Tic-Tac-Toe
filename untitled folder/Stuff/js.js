$(document).ready(function(){
  var boxes = $('.box');
  var count = 0;
  var win = '';
  var result = ('','');
  $('.box').on("click", function(){
      count++;
      if (count % 2 === 0) {
        ($(this).append('o'))
      } else {
        ($(this).append('x'))
      } 
    checkForWin();
  }) 
  function checkForWin() {
    result = $('.box').text()
   debugger;
  }
})
