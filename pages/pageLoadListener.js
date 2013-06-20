var urlFilter = {
  url: [
    { hostSuffix: 'github.com', pathContains: '/blob/' }
  ]
};

function doPageAction(details) {
  chrome.pageAction.show(details.tabId);
}

// Initialize theme option on startup if it isn't already.
chrome.runtime.onStartup.addListener(function() {
  chrome.storage.sync.get('theme', function(result) {
    if (result.theme == undefined || result.theme == null) {
      chrome.storage.sync.set({ theme: 'dark' });
    }
  });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(doPageAction, urlFilter);
chrome.webNavigation.onDOMContentLoaded.addListener(doPageAction, urlFilter);
