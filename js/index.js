$(".SubscribeModal-trigger").click(function(e){
  e.preventDefault();
  dataSubscribeModal = $(this).attr("data-SubscribeModal");
  $("#" + dataSubscribeModal).css({"display":"block"});
});

$(".close-SubscribeModal, .SubscribeModal-sandbox").click(function(){
  $(".SubscribeModal").css({"display":"none"});
});

var state = [1,1,1,1,1,1];
$("#stavanReadMore").click(function(){
  if(state[0] === 1)
  {
    $("#stavanInfo").css("display","none");
    $("#stavanMoreInfo").css("display","block");
    state[0] = 2;
  }
  else if(state[0] === 2)
  {
    $("#stavanInfo").css("display","block");
    $("#stavanMoreInfo").css("display","none");
    state[0] = 1;
  }

});

$("#akshayReadMore").click(function(){
    if(state[1] === 1)
    {
        $("#akshayInfo").css("display","none");
        $("#akshayMoreInfo").css("display","block");
        state[1] = 2;
    }
    else if(state[1] === 2)
    {
        $("#akshayInfo").css("display","block");
        $("#akshayMoreInfo").css("display","none");
        state[1] = 1;
    }

});

$("#jayaReadMore").click(function(){
    if(state[2] === 1)
    {
        $("#jayaInfo").css("display","none");
        $("#jayaMoreInfo").css("display","block");
        state[2] = 2;
    }
    else if(state[2] === 2)
    {
        $("#jayaInfo").css("display","block");
        $("#jayaMoreInfo").css("display","none")
        state[2] = 1;
    }

});

$("#nisargReadMore").click(function(){
    if(state[3] === 1)
    {
        $("#nisargInfo").css("display","none");
        $("#nisargMoreInfo").css("display","block");
        state[3] = 2;
    }
    else if(state[3] === 2)
    {
        $("#nisargInfo").css("display","block");
        $("#nisargMoreInfo").css("display","none");
        state[3] = 1;
    }

});

$("#kartikeyaReadMore").click(function(){
    if(state[4] === 1)
    {
        $("#kartikeyaInfo").css("display","none");
        $("#kartikeyaMoreInfo").css("display","block");
        state[4] = 2;
    }
    else if(state[4] === 2)
    {
        $("#kartikeyaInfo").css("display","block");
        $("#kartikeyaMoreInfo").css("display","none");
        state[4] = 1;
    }

});

$("#samayReadMore").click(function(){
    if(state[5] === 1)
    {
        $("#samayInfo").css("display","none");
        $("#samayMoreInfo").css("display","block");
        state[5] = 2;
    }
    else if(state[5] === 2)
    {
        $("#samayInfo").css("display","block");
        $("#samayMoreInfo").css("display","none");
        state[5] = 1;
    }

});