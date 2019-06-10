(function () {

    let co, ctx, bgImg;
    let flowerImg, beeImg, protoFlower, protoBee;
    let keyPressed = '';
    let deltaMove = 5;

    protoFlower = {
        w: 60,
        h: 60,
        x: 620,
        y: 345,
        initPosition: function(canvasWidth, canvasHeight) {
            let limitTop = canvasHeight / 2;
            let limitRight = canvasWidth - this.w;
            let limitBottom = canvasHeight - this.h;
            this.x = Math.random() * limitRight;
            this.y = Math.random() * (limitBottom - limitTop) + limitTop;
        } 
    }

    protoBee = {
        w: 60,
        h: 60,
        x: 0,
        y: 0,
        move: function(canvasWidth, canvasHeight) {
            let limitTop = 0;
            let limitLeft = 0;
            let limitRight = canvasWidth - this.w;
            let limitBottom = canvasHeight - this.h;

            switch (keyPressed) {             
                case 'ArrowDown':
                    if (this.y < limitBottom) {
                        this.y += deltaMove;
                    }
                    break;
                case 'ArrowUp':
                    if (this.y > limitTop) {
                        this.y -= deltaMove;
                    }
                    break;
                case 'ArrowRight':
                    if (this.x < limitRight) {
                        this.x += deltaMove;
                    } 
                    break;
                case 'ArrowLeft':
                    if (this.x > limitLeft) {
                        this.x -= deltaMove;
                    }                
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

        // Init flower position
        protoFlower.initPosition(co.width, co.height);

        // Render the entire picture
        render();

        // Add listener on key events
        document.addEventListener('keydown', checkKey);
        document.addEventListener('keyup', stopMotion);
    }

    // Render function to be called in the init
    function render() {
        protoBee.move(co.width, co.height);
        ctx.clearRect(0, 0, 800, 500);
        ctx.drawImage(bgImg, 0, 0);
        ctx.drawImage(beeImg, protoBee.x, protoBee.y);
        ctx.drawImage(flowerImg, protoFlower.x, protoFlower.y);
        requestAnimationFrame(render);
    }

    //checking key
    function checkKey(e) {
        keyPressed = e.key;
    }

    //stop motion
    function stopMotion() {
        keyPressed = "noKey";
    }

    window.addEventListener('load', init);
})();