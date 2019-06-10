(function() {

    let co, ctx, bgImg, protoFlower, flowerCollector;
    
    function init() {
        co = document.querySelector('#canvas');
        ctx = co.getContext('2d');
        bgImg = new Image();
        bgImg.src = 'assets/img/background.png';
        flowerCollector = []; 

        //canvas background img
        bgImg.onload = function() {
            ctx.drawImage(bgImg, 0, 0);
        };
        
        // flower object
        protoFlower = {
            w: 40,
            h: 60,
            x: 0,
            y: 0,
            //iconPath: 'assets/img/flower-icon.png',
            col: 'rgb(255, 255, 0)',
            dirX: 0, // 0 = to the right 1 = to the left
            dirY: 0, // 0 = down 1 = up
            make: function() {
                flowerCollector.push(this);
            },
            move: function() {
                // let icon = new Image();
                // icon.src = this.iconPath;
                // icon.onload = function() {
                //     ctx.drawImage(icon, this.x, this.y);
                // };
                
                ctx.fillStyle = this.col;
                ctx.fillRect(this.x, this.y, this.w, this.h);
            }
        }

        flowerCloneFactory();
        render();

    }

    function flowerCloneFactory() {
        let clone = Object.create(protoFlower);
        clone.make();
    }

    function render() {
        ctx.clearRect(0, 0, 800, 500);
        for (let i = 0; i < flowerCollector.length; i++) {
            flowerCollector[i].move();
        }
        console.log(flowerCollector);

    }




        
    window.addEventListener('load', init);
})();