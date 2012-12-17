
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var exportButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	exportButton.click = function exportButton_click (event)// @startlock
	{// @endlock
		//Export cities
		var cityURL = window.location.href,
			cityPathname = window.location.pathname,
			exportURL;
		
		if (cityPathname.indexOf("index") != -1) {
			exportURL = cityURL.replace(cityPathname, '');
			exportURL += "/exportCities";
		} else {
			exportURL = cityURL;
			exportURL += "exportCities";
		}
		
		
		iframe = $("#iframeexport");
		if (iframe.length === 0) {
			$('body').append('<iframe id="iframeexport"></iframe>');
			iframe = $("#iframeexport");
		}
		iframe.hide();
		iframe.attr("src", exportURL);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("exportButton", "click", exportButton.click, "WAF");
// @endregion
};// @endlock
