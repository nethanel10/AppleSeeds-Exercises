const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];
    for(let i=0;i<listOfNeighbours.length;i++){
      let world=listOfNeighbours[i];
      for(let j=0;j<world.length;j++){
        console.log(` Neighbour:${world[j]}`);
      }
    }