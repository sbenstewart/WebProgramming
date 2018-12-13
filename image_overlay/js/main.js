$('.box1 > img').hover(function () {
    $('.desc div:eq('+0+')').show();
}, function () {
    $('.desc div').hide();
});

$('.box2 > img').hover(function () {
    var i = $(this).index();
    $('.desc div:eq('+1+')').show();
}, function () {
    $('.desc div').hide();
});

$('.box3 > img').hover(function () {
    var i = $(this).index();
    $('.desc div:eq('+2+')').show();
}, function () {
    $('.desc div').hide();
});
jQuery(window).load(function () {
$('.desc div').hide();
});
