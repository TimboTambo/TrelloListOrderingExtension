$(function() {
	var i = 0;
	var interval = setInterval(function() {
		var $lists = $(".list-header");
		if ($lists.length) {
			$(".js-list-content > div:first-child").after("<div style='padding-left: 8px; margin-bottom: 8px'><span class='order' style='background: #4454bf;border-radius: 5px;padding: 4px;color: white;font-size: 10px; margin-right: 2px'>Order</span><span class='randomise' style='background: #da4c4c;border-radius: 5px;padding: 4px;color: white;font-size: 10px;'>Randomise</span></div>");	
			clearInterval(interval);
		}
		else if (i++ > 8) {
			clearInterval(interval);
		} 
	}, 200);

	$("body").on("click", ".randomise", function(e) {
		var $list =$(e.target).closest(".list").find(".list-cards");
		var $cards = $list.find(".list-card");
		
		for (var j = 0; j < $cards.length; j++) {
			var $card = $cards.eq(j);
			var randomIndex = Math.floor(Math.random() * $cards.length);
			$cards.eq(randomIndex).after($card);
		}
	});

	$("body").on("click", ".order", function(e) {
		var $list =$(e.target).closest(".list").find(".list-cards");
		var $cards = $list.find(".list-card");
		$list.append($cards.sort(sortByName));
	});

	function sortByName(a, b){
	  var aName = $(a).find(".list-card-title").html().toLowerCase();
	  var spanIndex = aName.indexOf("</span>");
	  if (spanIndex > -1) {
	  	aName = aName.substring(spanIndex + 7, aName.length);
          }
	  var bName = $(b).find(".list-card-title").html().toLowerCase(); 
	  spanIndex = bName.indexOf("</span>");
		if (spanIndex > -1) {
	  	bName = bName.substring(spanIndex + 7, bName.length);
          }
	  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	}
})