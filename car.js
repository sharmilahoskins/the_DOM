// Story 1:
//
// Add (model) year, and a method that returns make, model and year as one String and use the method to tell the user.
// Story 2:
//
// Constrain the maximum speed to not exceed 85. Try taking it above 80 and see what happens.
// Story 3:
//
// Use a while loop to take speed up to 70, then use a while loop to brake down to 0. Surprise: it doesn't stop at 0, fix that.
// Story 4:
//
// Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed with a random amount with a maximum of plus or minus of the current speed. (Hint: try Math.random();)

var car1
function makeCar() {
  car1 = document.getElementById("color").value + " " + document.getElementById("year").value + " " + document.getElementById("model").value
}


var carSpeed = 0

function speedUp() {
  if(carSpeed < 90){
    carSpeed+=10
    document.getElementById("yourSpeed").innerHTML ="Your " + car1 + " is currently going " + carSpeed +" MPH"
  }
  else if (carSpeed === 90) {
    document.getElementById("yourSpeed").innerHTML ="The car is at maximum speed! SLOW DOWN!!!"
  }
}
function slowDown() {
  if (document.getElementById("rain").checked && carSpeed > 10){
    carSpeed-= Math.floor((Math.random()*10) +1)
    document.getElementById("yourSpeed").innerHTML ="Your " + car1 + " is currently going " + carSpeed +" MPH"
    }
    else if(carSpeed > 10){
    carSpeed-=10
    document.getElementById("yourSpeed").innerHTML ="Your " + car1 + " is currently going " + carSpeed +" MPH"
    }
    else if(carSpeed <= 10 && carSpeed > 1){
      carSpeed--
      document.getElementById("yourSpeed").innerHTML ="Your " + car1 + " is currently going " + carSpeed +" MPH"
    }
    else if (carSpeed === 1) {
    document.getElementById("yourSpeed").innerHTML ="The car is stopped."
    // carSpeed-=10
    }
 }





    //
    // function slowDown(car) {
    //   while (car.getValue()>=7){
    //       car.brake();
    //
    //       }
    //   while (car.getValue()<7 && car.getValue()>0) {
    //     car.stop()
    //   }
    //   }
