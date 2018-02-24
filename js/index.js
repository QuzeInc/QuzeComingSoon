$(".SubscribeModal-trigger").click(function(e){
  e.preventDefault();
  dataSubscribeModal = $(this).attr("data-SubscribeModal");
  $("#" + dataSubscribeModal).css({"display":"block"});
});

$(".close-SubscribeModal, .SubscribeModal-sandbox").click(function(){
  $(".SubscribeModal").css({"display":"none"});
});

