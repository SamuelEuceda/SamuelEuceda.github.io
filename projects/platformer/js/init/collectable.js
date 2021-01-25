(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 25},
        steve: {assetKey: 'steve', points: 50},
        grace: {assetKey: 'grace', points: 100},
        kennedi: {assetKey: 'kennedi', points: 200}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCollectable(type.max, 200, 170, 6, 1);
        createCollectable(type.max, 420, 170, 6, 1);
        createCollectable(type.db, 40, 560)
        createCollectable(type.db, 40, 380)
        createCollectable(type.db, 40, 200)
        createCollectable(type.db, 340, 480)
        createCollectable(type.db, 340, 300)
        createCollectable(type.db, 340, 120)
        createCollectable(type.db, 640, 120)
        createCollectable(type.db, 840, 220)
        createCollectable(type.db, 640, 320)
        createCollectable(type.db, 840, 420)
        createCollectable(type.db, 640, 520)
        createCollectable(type.grace, 840, 620)
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);