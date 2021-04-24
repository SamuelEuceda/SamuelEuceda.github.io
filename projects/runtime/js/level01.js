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
        function createSawBlade(x, ){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = groundY - 110;
            game.addGameItem(sawBladeHitZone); 
            var obstacleImage = draw.bitmap('img/sawblade.png');
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage);            
    }
        
        
        function createSpike(x){
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            spikeHitZone.x = x;
            spikeHitZone.y = groundY;
            game.addGameItem(spikeHitZone); 
            var obstacleImage = draw.bitmap('img/spike---drawing.png')
            spikeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            obstacleImage.scaleX = 0.20;
            obstacleImage.scaleY = 0.20;
        }

        function createEnemy(x){
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            varImage = draw.bitmap('img/spike---drawing.png');

            /*ask Mrs. Scheller about rotationavelocity*/
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-20);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function(){
                console.log('Halle has hit the enemy');
                game.increaseScore(+500);
                enemy.fadeOut(); 
            };
            
        };
        function createReward(x){
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'blue');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
            enemy.velocityX = -2;

            enemy.onPlayerCollision = function() {
                console.log('The reward has hit Halle');
                game.increaseScore(+250);
                enemy.fadeOut();
            };
        };
        createSpike(400);
        createReward(500);
        createSpike(600);
        createSawBlade(750);
        createEnemy(920);
        createSpike(920);
        createSawBlade(1050)
        createReward

        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
