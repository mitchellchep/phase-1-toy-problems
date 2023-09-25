//BUBBLESORT!
function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  
  const input = [5, 6, 1, 3, 4, 2];
  const sortedArray = bubbleSort(input);
  console.log(sortedArray); // [1, 2, 3, 4, 5, 6]
  

//LOOPS!: Staircase problem
  function staircase(n) {//for each row create 1
    for (let i = 1; i <= n; i++) {//starts at 1 and adds consequently
      let step = '';
      // iterate from 1 to the number entered with for loop
      for (let j = 1; j <= i; j++) {
        step += '#';
      }
      console.log(step);//prints the number of #steps inside our for loop
    }
  }
  
   
  //OBJECTS!!:Cylinder example 
  function Cylinder(cyl_height, cyl_diameter) {//input values for height and diameter
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  Cylinder.prototype.Volume = function () {//formula for calculating volume of a cylinder
    var radius = this.cyl_diameter / 2;//takes radius or divides diameter by 2 to convert it to radius
    return this.cyl_height * Math.PI * radius * radius;//22/7*r*r*h
  };
  //example
  var cyl = new Cylinder(7, 4);
  // Volume of the cylinder with four decimal places.
  console.log('volume =', cyl.Volume().toFixed(4));
  
