// Student Grade Generator
let marks = parseInt(prompt("Enter your marks: "))
console.log((marks))
alert ("Grade: " + gradingSystem(marks))

function gradingSystem(marks){
    switch (marks) {
        case marks>79 && marks<=100:
            return 'A'
            break;
        case marks>59 && marks<80:
            return 'B'
            break;
        case marks>49 && marks<60:
            return 'C'
            break;
        case marks>39 && marks<50:
            return 'D'
            break;
        case marks<40:
            return 'E'
            break;
    }
}
