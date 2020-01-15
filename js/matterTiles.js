"use strict";

function createPhysicsTiles() {
  // create circle and a bar
  var ball, bar;

  ball = Bodies.circle(
    tPosBall.X_START_POS,
    tPosBall.Y_START_POS,
    tPosBall.DOT_SIZE * 1,
    tPosBall.options
  );

  bar = Bodies.rectangle(
    tPosBar.X_START_POS,
    tPosBar.Y_START_POS,
    tPosBar.W_SIZE,
    tPosBar.H_SIZE,
    { isStatic: true }
  );

  // add all of the bodies to the world
  World.add(engine.world, [ball, bar]);
}
