var TMVC = {};
TMVC.sourceId = "20140811";
TMVC.isUseCache = true;
TMVC.isCrossDomain = false;
TMVC.isDebug = true;
TMVC.frontHost = "http://127.0.0.1:8000";
TMVC.backHost = "http://localhost/learn";
(function(S) {
	function initConfig() {
		S.config({
			   packages:[
				   {
					   name:"utils",
					   tag:"20130106",
					   path:"http://172.30.10.219:8888/",
					   charset:"gbk",
					   debug: true
				   }

			   ]
		});
	
	}
	initConfig();
})(KISSY);
