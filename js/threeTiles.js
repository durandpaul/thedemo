"use strict";

function createThreeJsTiles(engine, scene) {
  var bodies = [];

  for (var j = 0; j < engine.world.bodies.length; j++) {
    var m, b, w, h;
    b = engine.world.bodies[j];
    w = b.bounds.max.x - b.bounds.min.x;
    h = b.bounds.max.y - b.bounds.min.y;

    if (b.label == "Rectangle Body") {
      let rectGeometry = new THREE.BoxGeometry(w, h, 50);
      let rectMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      m = new THREE.Mesh(rectGeometry, rectMaterial);
    } else {
      let ballGeometry = new THREE.CircleGeometry(w / 2, 32);
      let ballMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      m = new THREE.Mesh(ballGeometry, ballMaterial);
      m.position.set(-5, 305, 0);
    }

    scene.add(m);
    bodies.push(m);
  }
  return bodies;
}
