'use strict';

function setCamera() {
  // 2d Camera
  var camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    1,
    1000
  );

  // Camera pos
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 800;

  return camera;
}

function createEnv() {
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight - 100);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  return renderer;
}
