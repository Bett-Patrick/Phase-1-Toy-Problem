// Student Grade Generator
let marks = parseInt(prompt("Enter your marks: "))
console.log((marks))
alert ("Grade: " + gradingSystem(marks))

function gradingSystem(marks){
    
    if (marks>79 && marks<=100){return 'A'}
        
    else if(marks>59 && marks<80) {return 'B'}
    
    else if(marks>49 && marks<60) {return 'C'}
    
    else if(marks>39 && marks<50) {return 'D'}
    
    else if(marks<40) {return 'E'}

    else{return "Invalid input!"}

}
