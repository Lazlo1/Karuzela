
$(function(){
    var carouselList = $('#carousel ul');
    setInterval(changeImg, 3000)
    
    function changeImg() {
        carouselList.animate({marginLeft: '-400px'}, 500, moveFirstSlide);

    };

    function moveFirstSlide(){
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.before(firstItem);
        carouselList.css({marginLeft: '0px'});
    };

    function moveLastSlide(){
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginRight: '0px'});
    };

    var next = $('.fa-angle-right');
    var prev = $('.fa-angle-left');

    next.click(function() {
        moveFirstSlide();
    });
    prev.click(function() {
        moveLastSlide();
    });

});