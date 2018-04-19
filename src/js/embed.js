(function() {	
	var umaiAnalytics = {};
	
	if (window.umaiAnalytics) {
		return;
	}

	loadStyle();
	loadScript();
	
	function loadScript() {

		var analyticsScript = document.createElement('script');
		analyticsScript.async = true;
		analyticsScript.src = process.env.ANALYTICS_URL+"?date="+encodeURIComponent(new Date());

		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(analyticsScript, entry);
	}

	function loadStyle() {
		var head = document.getElementsByTagName('head')[0];
		var analyticsLink = document.createElement('link');
	    analyticsLink.rel   = 'stylesheet';
	    analyticsLink.type  = 'text/css';
	    analyticsLink.href  = process.env.ANALYTICS_CSS_URL+"?date="+encodeURIComponent(new Date());
	    analyticsLink.media = 'all';
	    head.appendChild(analyticsLink);
	}

	function onPageReady(method) {
		console.log('called onPageReady');
		if (typeof(eval(method)) === 'function') {
		 	eval(method)();
		} else {
			setTimeout(function () {
			onPageReady(method);
		}), 50 }
	}

	umaiAnalytics.showAnalytics = function () {
		//if(umaiAnalytics.validConfig) { onPageReady("umaiAnalytics.showAnalytics"); }
	}
	
	umaiAnalytics.config = function(config) {
		console.log('called config', config);
		umaiAnalytics.apiKey = null;
		umaiAnalytics.validConfig = false;
		umaiAnalytics.appRenderParentElementId = null;
		umaiAnalytics.SourceIsAnalyticsWebsite = false;
		if(location.hostname == process.env.ANALYTICS_DOMAIN){
			umaiAnalytics.SourceIsAnalyticsWebsite = true
		}

		if (config !== null && typeof config === 'object') {
			umaiAnalytics.validConfig = true;
			if ('appRenderParentElementId' in config){
				umaiAnalytics.appRenderParentElementId = config.appRenderParentElementId;
			} else {
				console.error('umaiAnalytics: appRenderParentElementId not present!')
			}
		}
	};
	
	window.umaiAnalytics = umaiAnalytics;
			
})();