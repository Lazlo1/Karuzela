
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
    
});
