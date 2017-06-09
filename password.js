// User Name and Password
//
// Challenges:
//
// Create a webpage with just the checker for a secure web site.
// The user has to enter a user ID and a password, which has to adhere to the to following criteria:
//
// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Password has to contain at least one digit
// Password has to contain a lower and an uppercase letter
// First, let a user input both user ID and password,
// Then create methods corresponding to criteria above to evaluate the user ID and password
// Then output whether the combination the combination is acceptable or not.
// Run the program and test it for all criteria listed above by inputing different values.

var passed = {valid: "true"}
var failed = {reason1: "Username should not include #",
              reason2: "Username should not include !",
              reason3: "Username should not include $",
              reason4: "Username should contain atleast 6 characters"
              }

function createUser() {
  let user = document.getElementById("user").value
  let pass = document.getElementById("pass").value
  checkUser(user)
}

function checkUser(user) {
  if (user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")) {
    console.log("username works")
  }
  else if (user.includes("!")) {
    alert(failed.reason2)
  }
  else if (user.includes("#")){
    alert(failed.reason1)
  }
  else if (user.includes("$")){
    alert(failed.reason3)
  }
  else if (user.length < 6){
    alert(failed.reason4)
  }
}

//     checkPassword: function() {
//         return pass.length >= 6 && ( pass.includes("!") || pass.includes("#") || pass.includes("$") )
//     }
//   }
// }
