"use strict";

// Ball obj
var tPosBall = {
  X_START_POS: 400,
  Y_START_POS: 0,
  Z_START_POS: 0,
  DOT_SIZE: 15,
  options: {
    friction: 0.0001,
    restitution: 0.8,
    density: 0.0001,
    isStatic: true
  }
};

// Bar obj
var tPosBar = {
  X_START_POS: 400,
  Y_START_POS: 300,
  Z_START_POS: 0,
  W_SIZE: 300,
  H_SIZE: 15,
  options: {
    isStatic: true
  },
  rotation: 0.01
};
