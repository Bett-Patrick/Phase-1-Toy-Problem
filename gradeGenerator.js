// Student Grade Generator
let marks = prompt("Enter your marks");
let grade = function gradingSystem(marks){
    if (marks >= 0 && marks>=100) {
        console.log(parseInt(marks))
        switch (marks) {
            case marks>79:
                grade = 'A'
                break;
            case marks>59 && marks<80:
                grade = 'B'
                break;
            case marks>49 && marks<60:
                grade = 'C'
                break;
            case marks>39 && marks<50:
                grade = 'D'
                break;
            case marks<40:
                grade = 'E'
                break;
            
            default:
                
                break;
        }
    return grade()
    }
}