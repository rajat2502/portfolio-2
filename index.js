
// JAVASCRIPT
$(".home").click(function(){
  $(".grid-home").css("display","block");
  $(".grid-work").css("display","none");
  $(".grid-resume").css("display","none");
  $(".grid-contact").css("display","none");
});

$(".resume").click(function(){
  $(".grid-resume").css("display","block");
  $(".grid-work").css("display","none");
  $(".grid-home").css("display","none");
  $(".grid-contact").css("display","none");
});

$(".work").click(function(){
  $(".grid-work").css("display","block");
  $(".grid-home").css("display","none");
  $(".grid-resume").css("display","none");
  $(".grid-contact").css("display","none");
});

$(".contact").click(function(){
  $(".grid-contact").css("display","block");
  $(".grid-work").css("display","none");
  $(".grid-resume").css("display","none");
  $(".grid-resume").css("display","none");
});
