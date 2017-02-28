// import $ from 'jquery';

// TODO: This is some kind of easy fix, maybe we can improve this
const setContentHeight = () => {
  const $SIDEBAR_FOOTER = $('.sidebar-footer');
  const $LEFT_COL = $('.left_col');
  const $RIGHT_COL = $('.right_col');
  const $NAV_MENU = $('.nav_menu');
  const $FOOTER = $('footer');
  const $BODY = $('#container');

  // reset height
  $RIGHT_COL.css('min-height', $(window).height());

  const bodyHeight = $BODY.outerHeight(),
      footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
      leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height();
  let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

  // normalize content
  contentHeight -= $NAV_MENU.height() + footerHeight;

  $RIGHT_COL.css('min-height', contentHeight);
};

// toggle small or large menu
const toggleMenu = () => {
  const $BODY = $('#container');
  const $SIDEBAR_MENU = $('#sidebar-menu');

  if ($BODY.hasClass('nav-md')) {
    $SIDEBAR_MENU.find('li.active ul').hide();
    $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
  } else {
    $SIDEBAR_MENU.find('li.active-sm ul').show();
    $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
  }

  $BODY.toggleClass('nav-md nav-sm');

  setContentHeight();
};

export { toggleMenu };
