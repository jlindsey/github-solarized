var urlFilter = {
  url: [
    { hostSuffix: 'github.com', pathContains: '/blob/' }
  ]
};

function ensureStylesheetIsOnPage(details) {
  chrome.tabs.insertCSS(details.tabId, { file: 'githubSolarized.css' });
}

chrome.webNavigation.onHistoryStateUpdated.addListener(ensureStylesheetIsOnPage, urlFilter);
chrome.webNavigation.onCommitted.addListener(ensureStylesheetIsOnPage, urlFilter);
