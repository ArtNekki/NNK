import $ from 'jquery';

$('[data-open-user-panel]').on('click', function() {
  $('html').addClass('page--user-panel-opened');
});

$('[data-close-user-panel]').on('click', function() {
  $('html').removeClass('page--user-panel-opened');
});
