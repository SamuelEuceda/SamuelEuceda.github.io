var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };

        /*
        for(var i = 0;i < levelData.gameItems.length; i++){
            var 
        }
        */
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSpike(x){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = groundY - 110;
            game.addGameItem(sawBladeHitZone); 
            var obstacleImage = draw.bitmap('img/Spike.png');
            
            obstacleImage.x = -30;
            obstacleImage.y = -35;
            obstacleImage.scaleX = .075;
            obstacleImage.scaleY = .075;
            sawBladeHitZone.addChild(obstacleImage);            
    }
        
        
        function createShell(x){
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            spikeHitZone.x = x;
            spikeHitZone.y = groundY;
            game.addGameItem(spikeHitZone); 
            var obstacleImage = draw.bitmap('img/blue shell.png');
            spikeHitZone.addChild(obstacleImage);
            obstacleImage.x = -35;
            obstacleImage.y = -30;
            obstacleImage.scaleX = 0.3;
            obstacleImage.scaleY = 0.3;
            
        }

        function createEnemy(x){
            var enemy = game.createGameItem('enemy',25);
            var billImage = draw.bitmap('img/bulletbill.png');
            billImage.x = -25;
            billImage.y = -25;
            enemy.addChild(billImage);
            enemy.x = x;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            billImage.scaleX = .25;
            billImage.scaleY = .25;

            /*ask Mrs. Scheller about rotationavelocity*/
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-50);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function(){
                console.log('Halle has hit the enemy');
                game.increaseScore(+850);
                enemy.fadeOut(); 
            };
            
        };
        function createReward(x, y){
            var enemy = game.createGameItem('enemy',25);
            var redCoin = draw.bitmap('img/redCoin.png');
            redCoin.x = -30;
            redCoin.y = -35;
            enemy.addChild(redCoin);
            enemy.x = x;
            enemy.y = groundY - y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            redCoin.scaleY = .075;
            redCoin.scaleX = .075;

            enemy.onPlayerCollision = function() {
                console.log('The reward has hit Halle');
                game.increaseScore(+40);
                enemy.fadeOut();
            };
        };
        createShell(400);
        createReward(400, 80);
        createShell(600);
        createReward(600, 80);
        createSpike(750);
        createEnemy(930);
        createShell(930);
        createSpike(1100);
        createShell(1250);
        createReward(1250, 80);
        createSpike(1450);
        createShell(1650);
        createReward(1650, 80);
        createSpike(1850);
        createShell(2050);
        createReward(2050, 80);
        createSpike(2250);
        createShell(2450);
        createReward(2450, 80);
        createSpike(2650);
        createShell(2850);
        createEnemy(2850);
        createSpike(3025);
        createShell(3200);
        createReward(3200, 80);
        createSpike(3375);
        createShell(3550);
        createReward(3550, 80);
        createSpike(3725);
        createReward(3812.5, 100);
        createSpike(3900);
        createShell(4075);
        createEnemy(4075);
        createSpike(4425);
        createShell(4600);
        createReward(4600, 80);
        createSpike(4775);
        createReward(4862.5,100);
        createSpike(4950);
        createShell(5125);
        createEnemy(5125);
        createSpike(5300);
        createShell(5475);
        createReward(5475, 80);
        createSpike(5650);
        createShell(5825);
        createReward(5825, 80);
        createEnemy(6000);



        

        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
