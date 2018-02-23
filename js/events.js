$(".Paymodal-trigger").click(function(e){
  e.preventDefault();
  dataPaymodal = $(this).attr("data-Paymodal");
  $("#" + dataPaymodal).css({"display":"block"});
});

$(".close-Paymodal, .Paymodal-sandbox").click(function(){
  $(".Paymodal").css({"display":"none"});
});