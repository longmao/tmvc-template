KISSY.add(function(S, E, D, renderEngine) {
	var View = {
		renderHtml: function(tmpl, data, callback) {
			renderEngine.renderHtml(tmpl, data, callback);
		},
		bindEvent: function() {
			
		}
	};
	return View;
}, {requires:['event', 'dom', 'renderEngine']});