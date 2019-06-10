(function () {

    let co, ctx, bgImg;
    let flowerImg, beeImg, protoFlower, protoBee;
    let keyPressed = '';
    let deltaMove = 5;

    protoFlower = {
        w: 60,
        h: 60,
        x: 120,
        y: 345,
        dirX: 0,
        dirY: 0,
    }

    protoBee = {
        w: 60,
        h: 60,
        x: 0,
        y: 0,
        dirX: 0,
        dirY: 0,
        move: function() {
            switch (keyPressed) {
                case 'ArrowDown':
                    this.y += deltaMove;
                    break;
                case 'ArrowUp':
                    this.y -= deltaMove;
                    break;
                case 'ArrowRight':
                    this.x += deltaMove;
                    break;
                case 'ArrowLeft':
                    this.x -= deltaMove;
                    break;
                default:
                    break;
            }
        }
    }

    function init() {
        // canvas context
        co = document.querySelector('#canvas');
        ctx = co.getContext('2d');

        //canvas background img
        bgImg = new Image();
        bgImg.src = 'assets/img/background.png';
        bgImg.onload = function () {
            ctx.drawImage(bgImg, 0, 0);
        }

         //bee img
         beeImg = new Image();
         beeImg.src = 'assets/img/bee-icon.png';
         beeImg.onload = function () {
             ctx.drawImage(beeImg, protoBee.x, protoBee.y);
         }

          //flower img
        flowerImg = new Image();
        flowerImg.src = 'assets/img/flower-icon.png';
        flowerImg.onload = function () {
            ctx.drawImage(flowerImg, protoFlower.x, protoFlower.y);
        }

        render();

        document.addEventListener('keydown', checkKey);
    }

    //render function to be called in the init
    function render() {
        protoBee.move();
        requestAnimationFrame(render);
    }

    //checking key
    function checkKey(e) {
        keyPressed = e.key;
    }

    window.addEventListener('load', init);
})();