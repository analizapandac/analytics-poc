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
	
	umaiAnalytics.config = function(venue) {
		umaiAnalytics.apiKey = null;
	};
	
	window.umaiAnalytics = umaiAnalytics;
			
})();