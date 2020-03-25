chrome.tabs.query({active:true, currentWindows: true}, function(tabs){
	chrome.pageAction.show(tabs[0].id)
});