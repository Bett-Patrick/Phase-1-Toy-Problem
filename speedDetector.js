// Speed Detector 
let speed = parseInt(prompt("Speed"))
console.log(speedDetector(speed))
alert(speedDetector(speed))

function speedDetector (speed) {
    let demeritPoints = Math.floor((speed-70)/5)
    if (speed<70) {
        return ("Speed is Ok")
    }
    else if (speed>=70) {
        return (("Points: " +demeritPoints))
    }
    else if (demeritPoints>12) {
        return ("License Suspended")
    }
}


