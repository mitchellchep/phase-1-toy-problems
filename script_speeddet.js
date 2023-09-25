//function for calculating demerit points
function calculateDemeritPoints(speed) {
  const speedLimit = 70;//should not surpass 70
  const kmPerDemeritPoint = 5;//for every speed above 70
  const maxDemeritPoints = 12;//maximum number of demerit points allowed

  if (speed <= speedLimit) {
    console.log("Ok");//okay if within 70 and below
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log(`Points: ${demeritPoints}`);//calculates for speed above 70

    if (demeritPoints > maxDemeritPoints) {
      console.log("License suspended");//func for outputing license suspension when demerit points surpasses 12
    }
  }
}

// Input the speed of the car as a number
const speed = parseFloat(prompt("Enter the speed of the car (km/h):"));
//calculates the speed and checks if there will be any demerit points
calculateDemeritPoints(speed);
