KISSY.add(function(S) {
	var Model = {
		getMarkData: function(callback) {
			var data = {  title: '鏍囩',
						  list: ['鏂囪壓', '鍗氬', '鎽勫奖', '鐢靛奖', '姘戣埃', '鏃呰', '鍚変粬']
					   };
			callback(data);
		},
		getFooterIntroduceData: function(callback) {
			var data = {
				introduce: "娆㈣繋浣跨敤artTemplate妯℃澘寮曟搸锛屼綋楠岀粓鏋佸揩鎰燂紒"
			};
			callback(data);
		}
	};
	return Model;
});