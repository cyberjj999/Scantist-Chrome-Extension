
//This listens for the content script message
//and if you get the particular message, you want to show the page action icon
chrome.runtime.OnMessage.addListener(function(request, sender, sendResponse){
	if(request.todo == "showPageAction"){
		chrome.tabs.query({active:true, currentWindows: true}, function(tabs){
		chrome.pageAction.show(tabs[0].id)
		});
	}
});


