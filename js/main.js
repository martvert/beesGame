(function() {

    let co, ctx, bgImg;
    
    function init() {
        co = document.querySelector('#canvas');
        ctx = co.getContext('2d');
        bgImg = new Image();
        bgImg.src = 'assets/img/background.png';

        //canvas background img
        bgImg.onload = function() {
            ctx.drawImage(bgImg, 0, 0);
        };


    }


        
    window.addEventListener('load', init);
})();