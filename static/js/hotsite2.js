$(document).ready(function(){
	data = $.ajax("contract.json",{"async":false,"dataType":"json"});
	contract = data.responseJSON;
	$("#contract").append('<a href="tencent://message/?uin='+contract.QQ+'&Site=http://vps.shuidazhe.com&Menu=yes"><button class="btn btn-info">'+contract.DESC+'</button></a>&nbsp;'); 
	$("#contract").append('<a href="mqqwpa://im/chat?chat_type=wpa&uin='+contract.QQ+'&version=1&src_type=web&web_src=oicqzone.com"><button class="btn btn-primary">手机QQ</button></a>'); 
	data = $.ajax("link.json",{"async":false,"dataType":"json"});
	links = data.responseJSON;
	for(var l in links){
		link = links[l];
		console.log(link);
		$("#links").append('<a href="'+link.url+'" class="list-group-item">'+link.name+'</a>')
	}
	data = $.ajax("data.json",{"async":false,"dataType":"json"});
	sales = data.responseJSON;
	for(var message in sales){
		console.log(message);
		var sale = sales[message];
		console.log(sale);
				
		$("#app").append("<div class='col-xs-6 col-lg-4'>"+
              "<h2>"+sale.mingzi+"</h2>"+
              "<p>"+sale.jieshao+"</p>" +
			  "<img class='b-lazy' width='100%' src='"+sale.tupian+"'></img>"+
			  "<div class='price' style='width:100%;background-color:deeppink'>"+
			  "<span class='text' style='margin-left: 5px; font-size: 12px;color: #ffe4ed;'>券后价&nbsp;￥<span class='price'>"+sale.quanhoujia+"</span></span>"+
			  "<span class='text' style='margin-left: 15px; font-size: 12px;color: #ffe4ed;'><del>原价&nbsp;￥"+sale.yuanjia+" </del></span></div>"+
              "<p><a class='btn btn-default' target='_blank' href='"+sale.lingquan+"' role='button'>领券</a>"+
			  "<a class='btn btn-default' target='_blank' href='"+sale.xiadan+"' role='button'>下单</a></p>"+
              "</div>")
	}
});
