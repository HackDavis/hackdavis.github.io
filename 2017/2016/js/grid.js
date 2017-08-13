function populateGrid(obj){
	for (var i = 0; i < obj.length; i++){

		var p = $('<div class="grid-item"></div>');
		
		//set title
		var title = $('<div class="grid-title" ' + 'id="' + obj[i]["id"] + '-title"' + '>' + obj[i]["name"] +'</div>');
		title.appendTo(p);

		//set heading
		var heading = $('<div class="grid-heading">' + obj[i]["heading"] +'</div>');
		heading.appendTo(p);

		//set description
		var desc = $('<div class="grid-desc">' + obj[i]["desc"] +'</div>');
		desc.appendTo(p);
		
		p.appendTo(".grid");
	}
}
