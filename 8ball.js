// Magic 8 Ball Webpage
//
// Story: As a user I can enter a question on a web page and magically get an answer to my question.
//
// Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
// Input a question from the user in a webpage.
// Create a random number to select one of the answers.
// Output the question with the random answer in the webpage.
// Make it so the user can input a new question and get a new random answer until the user enters STOP.

var ans = ["Yup!", "Fuhgeddaboudit", "Maybe",  "What would your mother do?", "What would an Australian do", "Nope", "I really don't care."]

function eightBall() {

  document.getElementById("ques").innerHTML = "Your Question: <br/>" + document.getElementById("question").value
  document.getElementById("answer").innerHTML =  "Answer: <br/>" + ans[Math.floor((Math.random() * 7))]

  document.getElementById("question").value = ""

}
