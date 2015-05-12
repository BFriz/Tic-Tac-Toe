var button = $('button');


$(document).ready(function(){
  for(var i = 0; i < 1; i++){
    $('.box').on("click", function(){
      if ('.box' % 2 === 0){
        ($(this).append('x'))
       // console.log($(this).attr('name'))
      }else {
        ($(this).append('o'))
      }
    })
  }
})