import $ from 'jquery';
import baron from 'baron';

// ready(function() {
//   baron({
//     root: '#main-chat',
//     scroller: '.chat-scroller',
//     bar: '.chat-bar',
//     scrollingCls: '.chat-main-content--scrolling',
//     draggingCls: '.chat-main-content--dragging',
//     barOnCls: '.chat-main-content--scrollbar',
//     impact: 'scroller'
//   });
// });

$(document).ready(function() {
  $('#chat-filter').on('click', function(e) {
      const message = e.target.closest('.chat-message--filter');

      if (message) {
        $('html').addClass('page--manager-selected');
      }
  });

  $('#chat-open-filter').on('click', function() {
    $('html').removeClass('page--manager-selected');
  });
});
