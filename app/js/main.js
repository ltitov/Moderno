$(function () {

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.product-page__filter-btn--list').on('click', function () {
    $('.product__item').addClass('list');
    $('.product-page__filter-btn--list').addClass('active');
    $('.product-page__filter-btn--large').removeClass('active');
  });

  $('.product-page__filter-btn--large').on('click', function () {
    $('.product__item').removeClass('list');
    $('.product-page__filter-btn--large').addClass('active');
    $('.product-page__filter-btn--list').removeClass('active');
  });


  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });


  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  //Tabs

  $('.product-one__tab .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tab, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tab .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // Selected

  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__inner-box');
});