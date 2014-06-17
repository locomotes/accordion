$('.box1tab').click(function() {
    $('.box1info').show();
    $('.box2info').hide();
    $('.box3info').hide();
});

$('.box2tab').click(function() {
    $('.box1info').hide();
    $('.box2info').show();
    $('.box3info').hide();
});

$('.box3tab').click(function() {
    $('.box1info').hide();
    $('.box2info').hide();
    $('.box3info').show();
});

// $(this) // $('.box1tab')