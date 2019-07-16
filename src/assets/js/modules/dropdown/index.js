import $ from 'jquery';

$(document).ready(function () {
  const allDropdowns = $('[data-dropdown]');
  const html = $('html');

  allDropdowns.on('show.zf.dropdown', function() {
    const wrapper = $(this).parents('.dropdown-wrapper');

    wrapper.addClass('dropdown-wrapper--opened');
    html.addClass('dropdown--opened');
  });

  allDropdowns.on('hide.zf.dropdown', function() {
    const wrapper = $(this).parents('.dropdown-wrapper');
    wrapper.removeClass('dropdown-wrapper--opened');
  });

  let activeItem = null;

  $(document).on('click', '.dropdown-pane [data-target]', function() {
    const wrapper = $(this).parents('.dropdown-wrapper');
    const dropdown = wrapper.find('[data-dropdown]');
    const dropdownToggle = wrapper.find('[data-toggle]');

    if (activeItem) {
      activeItem.removeClass('is-active');
      activeItem = null;
    }

    $(this).addClass('is-active');
    activeItem = $(this);

    dropdownToggle.html($(this).html());
    dropdown.foundation('close');
  });

  $(document).on('click', function(e) {
    const dropdown = e.target.closest('.dropdown-wrapper');

    if (html.hasClass('dropdown--opened') && !dropdown) {
      html.removeClass('dropdown--opened');
      allDropdowns.foundation('close');
    }
  })
});
