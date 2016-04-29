$(document).ready(function () {

    $('.voteImg').hover(function () {
        $(this).css('opacity', '0.7');
    }, function () {
        $(this).css('opacity', '1');
    });

    $('.voteImg').click(function(){
        $('.voteImg').css('box-shadow','0px 0px 0px 0px black');
        $(this).css('box-shadow','0px 0px 5px 5px black');
    });

    $('#goLive').click(function () {
        window.location.href = liveMapUrl;
    });

    $('#userMap').click(function () {
        window.location.href = userMapUrl;
    });
});