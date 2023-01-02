var time = 60;

while (time >= 0) {
    if (time === 50) {
        console.log("Orbiter transfers from ground to internal power\n");
    }
    else if (time === 31) {
        console.log("Ground launch sequencer is go for auto sequence start\n");
    }
    else if (time === 16) {
        console.log("Activate launch pad sound suppression system\n");
    }
    else if (time === 10) {
        console.log("Activate main engine hydrogen burnoff system\n");
    }
    else if (time === 6) {
        console.log("Main engine start\n");
    }
    else if (time === 0) {
        console.log("Solid rocket booster ignition and liftoff!\n");
    }
    else {
        console.log("T-" + time + " seconds\n");
    }
    
    time = time - 1
}

for (var x = 0; x < 5; x = x + 1) {
    for (var y = 0; y < 3; y = y + 1) {
      console.log(x + "," + y);
    }
  }