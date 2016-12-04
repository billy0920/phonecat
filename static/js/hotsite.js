$(document).ready(function(){
	var config = {syncURL: "https://hotsite001.wilddogio.com"}; //输入节点 URL
	wilddog.initializeApp(config);
	var ref = wilddog.sync().ref();
	// snapshot 里面的数据会一直和云端保持同步
	ref.once("value", function(snapshot) {
		var obj = snapshot.val();
		var sales = obj.messageboard;
		for(var message in sales){
			var sale = sales[message];
			console.log(sales[message].content);
			//$("#app").append("<div id='"+obj.messageboard[message].presenter+"'><h4>"+(obj.messageboard[message].content) +
			//"<author><a href=\"\\"+obj.messageboard[message].presenter+"\">xxxx</a></author></h4></div>");
				
			$("#app").append("<div class='col-xs-6 col-lg-4'>"+
              "<h2>"+sale.presenter+"</h2>"+
              "<p>"+sale.content+"</p>" +
			  "<img class='b-lazy' width='50%' src='https://img.alicdn.com/bao/uploaded/i3/TB1y2nZNFXXXXXkaFXXXXXXXXXX_!!0-item_pic.jpg'"+
              "<p><a class='btn btn-default' href='#' role='button'>View details &raquo;</a></p>"+
              "</div>")
		}
	});
});
