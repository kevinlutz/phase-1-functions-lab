function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else if (blocks < 42) {
    return 42 - blocks;
  } else {
    return 0;
  }
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  return (num2 - num1) * 264;
}
