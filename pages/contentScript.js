function applyTheme(t) {
  var elem = $('table.file-code div.highlight')
  
  if (t == 'off') {
    elem.removeClass('solarized');
    return;
  }

  elem.toggleClass('solarized', true);

  if (t == 'light') {
    elem.removeClass('dark');
    elem.addClass('light');
  } else if (t == 'dark') {
    elem.removeClass('light');
    elem.addClass('dark');
  }
}

chrome.storage.sync.get('theme', function(result) { 
  // ['dark', 'light', 'off']
  var theme = result.theme

  applyTheme(theme);
});

chrome.storage.onChanged.addListener(function(changes, area) {
  if (changes.theme == undefined || changes.theme == null) return;
  if (changes.theme.oldValue == changes.theme.newValue) return;

  applyTheme(changes.theme.newValue);
});
