// Story 1:
// Create a webpage that allows a user to input a dollar amount
// Story 2:
// Create a function that takes the dollar amount and alerts the user with that value
// Story 3:
// Alert the user with what a 20% tip would be on the dollar amount given
// Story 4:
// Display the tip amount to the user on the webpage


//pull total bill amount

var bill


function calcTip() {
  bill = parseInt(document.getElementById("total-bill").value)
  console.log(bill)

  if (document.getElementById("tip15").checked) {
    document.getElementById("tiptotal").innerHTML = "15% of $" + bill + " is $" + bill*.15 + "<br></br> Your Grand Total is $" + (bill + bill*.15)
    document.getElementById("tip15").checked= false
  }
  else if (document.getElementById("tip20").checked) {
    document.getElementById("tiptotal").innerHTML = "20% of $" + bill + " is $" + bill*.2 + "<br></br> Your Grand Total is $" + (bill + bill*.2)
    document.getElementById("tip20").checked= false
  }
  else if (document.getElementById("tip25").checked) {
      document.getElementById("tiptotal").innerHTML = "25% of $" + bill + " is $" + bill*.25 + "<br></br> Your Grand Total is $" + (bill + bill*.25)
      document.getElementById("tip25").checked= false
    }

}

//compare bill to the tip %

//link to button

//add total to end
