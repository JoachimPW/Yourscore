
// Button - add to favorite //

$('.add').click( function(){
    $(this).find('i').toggleClass('glyphicon-star-empty').toggleClass('glyphicon-arrow-left');
});

$('#menu-toggle').click( function(){
    $(this).find('i').toggleClass('glyphicon-arrow-right').toggleClass('glyphicon-arrow-left');
});