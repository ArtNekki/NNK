// import $ from 'jquery';
// import MainNav from './main-nav';
//
// $(document).ready(function() {
//   const getActiveTabId = function(container) {
//     return $(container).find('.tabs-title.is-active [data-tabs-target]').attr('href');
//   }
//
//   const setActiveTab = function(id) {
//     const tabName = id.slice(1, id.length);
//     $('#main-tabs').foundation('selectTab', tabName);
//   }
//
//   const mainNav = new MainNav({ target: '#main-nav' });
//
//   mainNav.onChange = function(activeLink) {
//     setActiveTab(activeLink.getAttribute('href'));
//   }
//
//   $(document).on('change.zf.tabs', '#main-tabs', function () {
//     const id = getActiveTabId($(this));
//     mainNav.changeActiveItem(id);
//   })
//
//   const activeTabId = getActiveTabId($('#main-tabs'));
//   mainNav.changeActiveItem(activeTabId);
// });
