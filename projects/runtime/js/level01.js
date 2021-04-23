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
        function createSawBlade(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone); 
            var obstacleImage = draw.bitmap('img/sawblade.png');
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage);            
    }
        
        
        function createSpike(x, y){
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            spikeHitZone.x = x;
            spikeHitZone.y = y;
            game.addGameItem(spikeHitZone); 
            var obstacleImage = draw.bitmap('img/spike---drawing.png')
            spikeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            obstacleImage.scaleX = 0.20;
            obstacleImage.scaleY = 0.20;
        }
        /*
        var addDistance = [];
        for( var i = 0; i < 25; i++){
          createSpike(500 + addDistance[i + 150], groundY);  
        }
        */
        createSpike(500, groundY);
        createSawBlade(650, groundY - 110);
        createSpike(800, groundY);
        createSawBlade(950, groundY - 110);
        createSpike(1100, groundY)
        createSawBlade(1250, groundY -110)
        createSpike(1400, groundY);
        createSawBlade(1550, groundY - 110);
        createSpike(1700, groundY);
        createSawBlade(1850, groundY - 110);
        createSpike(2000, groundY)

        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = groundY - y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;

            /*ask Mrs. Scheller about rotationavelocity*/
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-20);
            };
            enemy.onProjectileCollision = function(){
                console.log('Halle has hit the enemy');
                game.increaseScore(+100);
                enemy.fadeOut(); 
            };
            
        };
        function createReward(x,y){
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'blue');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = groundY - y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;

            enemy.onPlayerCollision = function() {
                console.log('The reward has hit Halle');
                game.increaseScore(+100);
                enemy.fadeOut();
            };
        };
        createEnemy(400, 50);
        createReward(200,50);
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
