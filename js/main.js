"use strict";

var loop = true;
var reload = false;
var barBool = true;
var rendererSet = createEnv();

rendererSet.domElement.addEventListener("click", function() {
  barBool = false;
});

function init() {
  var cameraSet = setCamera();
  var scene = new THREE.Scene();

  // create a Matter.js engine
  engine = Engine.create({ render: { visible: false } });
  // run the engine
  Engine.run(engine);

  // On Click change do the Demo

  createPhysicsTiles();
  var everyBodies = createThreeJsTiles(engine, scene);

  var matterBar = engine.world.bodies[1];
  var threeJsBar = everyBodies[1];
  var threeJsBall = everyBodies[0];
  var matterBall = engine.world.bodies[0];

  function render() {
    requestAnimationFrame(render);

    // click change boolean state : stop bar and the ball go down
    if (barBool) {
      threeJsBar.rotation.z -= tPosBar.rotation;
      Body.rotate(matterBar, tPosBar.rotation);
    } else {
      Body.setStatic(matterBall, false);
      threeJsBall.position.set(
        matterBall.position.x - (tPosBar.X_START_POS + 5),
        -(matterBall.position.y - (tPosBar.Y_START_POS + 5)),
        0
      );
    }

    if (matterBall.position.y > window.innerHeight - 100 ) {
      barBool = true;
      Body.setStatic(matterBall, true);
      Body.setPosition(matterBall, {x: tPosBall.X_START_POS, y: tPosBall.Y_START_POS, z: tPosBall.Z_START_POS})
      threeJsBall.position.set(
        matterBall.position.x - (tPosBar.X_START_POS + 5),
        -(matterBall.position.y - (tPosBar.Y_START_POS + 5)),
        0
      );
    }
    rendererSet.render(scene, cameraSet);
  }
  render();
}

init();
// window.addEventListener("load", init);
