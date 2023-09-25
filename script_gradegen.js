//promps the user to enter their marks
const Userinput = parseFloat(prompt('Enter your marks:'));
const input = parseFloat(Userinput)
if (isNaN(input) || input < 0 || input > 100) {
    alert ('Invalid input!')//returns error if the marks entered exceeds 100
    }
    //marks and their grade ranges
              let grade ;
               if (input > 79) {
                grade = 'A';
               }else if (input >=60){
                  grade = 'B';
               }else if (input >=50) {
                    grade = 'C';
               }else if (input>=40){
                  grade='D';
               }else {
                grade = 'E';
             }
             //function to output the grade 
             console.log(`Your grade is: ${grade}` )
        
calculateGrade()