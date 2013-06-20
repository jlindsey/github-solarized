$(function() {
  function changeTheme(theme) {
    if (theme == 'off') {
      $('.container').removeClass('solarized');
      return;
    }

    $('.container').toggleClass('solarized', true);

    if (theme == 'light') {
      $('.container').removeClass('dark');
      $('.container').addClass('light');
    } else if (theme == 'dark') {
      $('.container').removeClass('light');
      $('.container').addClass('dark');
    }
  }

  chrome.storage.sync.get('theme', function(result) {
    var elem = $('button[data-theme="' + result.theme + '"]')
    elem.button('toggle');

    changeTheme(result.theme);
  });

  $('button').on('click', function(e) {
    var selectedTheme = $(e.currentTarget).data('theme');
    chrome.storage.sync.set({ theme: selectedTheme });

    changeTheme(selectedTheme);
  });
});
