$(".SubscribeModal-trigger").click(function(e){
  e.preventDefault();
  dataSubscribeModal = $(this).attr("data-SubscribeModal");
  $("#" + dataSubscribeModal).css({"display":"block"});
});

$(".close-SubscribeModal, .SubscribeModal-sandbox").click(function(){
  $(".SubscribeModal").css({"display":"none"});
});

// reagarding the opening and closing of read more

var state = [1,1,1,1,1,1];
$("#stavanReadMore").click(function(){
  if(state[0] === 1)
  {
	$("#stavanMoreInfo").fadeIn(1000);
//    $("#stavanReadMore").text("Show less");
	state[0] = 2;
  }
  else if(state[0] === 2)
  {
	$("#stavanMoreInfo").fadeOut(1000);
//    $("#stavanReadMore").text("Read more");
	state[0] = 1;
  }

});

$("#akshayReadMore").click(function(){
	if(state[1] === 1)
	{
		$("#akshayMoreInfo").fadeIn(1000);
//        $("#akshayReadMore").text("Show less");
		state[1] = 2;
	}
	else if(state[1] === 2)
	{
		$("#akshayMoreInfo").fadeOut(1000);
//        $("#akshayReadMore").text("Read more");
		state[1] = 1;
	}

});

$("#jayaReadMore").click(function(){
	if(state[2] === 1)
	{
		$("#jayaMoreInfo").fadeIn(1000);
//        $("#jayaReadMore").text("Show less");
		state[2] = 2;
	}
	else if(state[2] === 2)
	{
		$("#jayaMoreInfo").fadeOut(1000);
//        $("#jayaReadMore").text("Read more");
		state[2] = 1;
	}

});

$("#nisargReadMore").click(function(){
	if(state[3] === 1)
	{
		$("#nisargMoreInfo").fadeIn(1000);
//        $("#nisargReadMore").text("Show less");
		state[3] = 2;
	}
	else if(state[3] === 2)
	{
		$("#nisargMoreInfo").fadeOut(1000);
//        $("#nisargReadMore").text("Read more");

		state[3] = 1;
	}

});

$("#kartikeyaReadMore").click(function(){
	if(state[4] === 1)
	{
		$("#kartikeyaMoreInfo").fadeIn(1000);
//        $("#kartikeyaReadMore").text("Show less");
		state[4] = 2;
	}
	else if(state[4] === 2)
	{
		$("#kartikeyaMoreInfo").fadeOut(1000);
//        $("#kartikeyaReadMore").text("Read more");
		state[4] = 1;
	}

});

$("#samayReadMore").click(function(){
	if(state[5] === 1)
	{
		$("#samayMoreInfo").fadeIn(1000);
//        $("#samayReadMore").text("Show less");
		state[5] = 2;
	}
	else if(state[5] === 2)
	{
		$("#samayMoreInfo").fadeOut(1000);
//        $("#samayReadMore").text("Read more");
		state[5] = 1;
	}

});



$(document).ready(function(){
	setInterval(function(){
		aonM = $("#navChangingM").attr("class");  // aon = active or not
		aonT = $("#navChangingT").attr("class");
		aonA = $("#navChangingA").attr("class");

		if(aonM==="active" || aonT==="active" || aonA==="active"){
			$("#nav_f").css({"background-color":"rgba(255, 255, 255, 0.8)"});
		}
		else{
			$("#nav_f").css({"background-color":"rgba(255, 255, 255, 00)"});
		}
	}, 20);

	var photoState = true;
	setInterval(
		function(){
			if(photoState){
				$("#image1").fadeOut(1000, function(){
					$("#image1").attr('src', 'img/verify2.png').fadeIn(1000)
				});
				photoState = false;
			}
			else{
				$("#image1").fadeOut(500, function(){
					$("#image1").attr('src', 'img/verify1.png').fadeIn(1000)
				});
				photoState = true;
			}
		},
		4000
	);


	$("#footer-send").click(
		function(){
			console.log("called");
			email = $("#formEmail").val();
			name = $("#formName").val();
			message = $("#formMessage").val();
			var headers = {
				"Content-Type" : "application/json"
			}
			var data = {
				"email" : email,
				"name" : name,
				"message" : message
			};
			data = JSON.stringify(data);

			$.ajax({
				type: "POST",
				url: "http://subscribeservice-dev.us-east-1.elasticbeanstalk.com",
				data: data,
				headers: headers,
				success: function(){
					console.log("done");
				}
			});
		}
	);
	$(".subscribe-send").click(
		function(){
			console.log("called");
			email = $("#subscribeEmail").val();
			name = $("#subscribeName").val();
			message = "";
			var headers = {
				"Content-Type" : "application/json"
			}
			var data = {
				"email" : email,
				"name" : name,
				"message" : message
			};
			data = JSON.stringify(data);

			$.ajax({
				type: "POST",
				url: "http://subscribeservice-dev.us-east-1.elasticbeanstalk.com",
				data: data,
				headers: headers,
				success: function(){
					console.log("done");
				}
			});
		}
	);
});
	