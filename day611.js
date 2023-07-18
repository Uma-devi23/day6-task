function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const seats = seatingArrangement[0].length;
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let currentGroupSize = 0;
      let left = 0;
  
      for (let right = 0; right < seats; right++) {
        if (seatingArrangement[i][right] === 0) {
          currentGroupSize++;
  
          if (currentGroupSize === n) {
            count++;
            currentGroupSize--;
          }
        } else {
          currentGroupSize = 0;
          left = right + 1;
        }
      }
    }
  
    return count;
  }
  
  const seatingArrangement1 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ];
  const n1 = 2;
  
  console.log(groupSeats(seatingArrangement1, n1));
  
  const seatingArrangement2 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ];
  const n2 = 4;
  
  console.log(groupSeats(seatingArrangement2, n2));
  