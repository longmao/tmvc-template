KISSY.add(function(S, D, Model, View) {
	var Control = {
		init: function() {
			Model.getMarkData(function(data) {
										
			});
			Model.getFooterIntroduceData(function(data) {
				
			});
		}
	}
	return Control;
}, 
{requires:["dom", "page/mods/index-model", "page/mods/index-view"]});
