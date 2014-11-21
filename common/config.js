var TMVC = {};
TMVC.sourceId = "20140811";
TMVC.isUseCache = false;
TMVC.host = "http://172.30.10.76:8080";
TMVC.isUseMiniTmpl = false;
TMVC.isDebug = false;
(function(S) {
	function initConfig() {
		S.config({
			   packages:[
				   {

					   name:"utils",

					   tag:"20130106",

					   path:"http://172.30.10.76:8000/",  // cdn涓婇�褰撲慨鏀瑰搴旇矾寰�

					   charset:"gbk",

					   debug: true
				   }

			   ]
		});
	
	}
	initConfig();
})(KISSY);
