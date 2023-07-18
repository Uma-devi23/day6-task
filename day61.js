function findContiguousSeats(theaterLayout, n) {
    const rows = theaterLayout.length;
    const seats = theaterLayout[0].length;
  
    for (let i = 0; i < rows; i++) {
      let left = 0;
      let right = 0;
      let currentGroupSize = 0;
      let start = 0;
  
      while (right < seats) {
        if (theaterLayout[i][right] === 0) {
          currentGroupSize++;
  
          if (currentGroupSize === n) {
            return { row: i, start, end: right };
          }
  
          right++;
        } else {
          currentGroupSize = 0;
          left = right = right + 1;
        }
      }
    }
  
    return null;
  }
  

  const theaterLayout = [
    [1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 0]
  ];
  
  const groupSize = 3;
  const result = findContiguousSeats(theaterLayout, groupSize);
  
  if (result) {
    console.log(`Found a contiguous seating arrangement for ${groupSize} friends in row ${result.row + 1}, from seat ${result.start + 1} to seat ${result.end + 1}.`);
  } else {
    console.log(`No contiguous seating arrangement for a group of ${groupSize} friends found.`);
  }
  