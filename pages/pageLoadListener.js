var urlFilter = {
  url: [
    { hostSuffix: 'github.com', pathContains: '/blob/' }
  ]
};

function doPageAction(details) {
  chrome.pageAction.show(details.tabId);
}

chrome.webNavigation.onHistoryStateUpdated.addListener(doPageAction, urlFilter);
chrome.webNavigation.onCommitted.addListener(doPageAction, urlFilter);
