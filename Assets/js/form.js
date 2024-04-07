const name = document.getElementById("name")
const title = document.getElementById("title")
const content = document.getElementById("content")


const buttonEl = document.querySelector('#submitbtn');
  // Get the button element
buttonEl.addEventListener("click", function(event){
  event.preventDefault()
  const nameValue = name.value
  console.log(nameValue)
  window.location.href = "./blog.html"
})
const titleEL = document.querySelector("submitbtn");

titleEL.addEventListener("click", function(event){
  event.preventDefault()
  const titleValue = title.value
  window.location.href = "./blog.html"
})
const contentEl = document.querySelector("#submitbtn")

contentEl.addEventListener("click", function(event){
  event.preventDefault()
  const contentValue = content.value
  window.location.href = "./blog.html"
})






  
  
 


//   // Add a click event listener to the button
//   buttonEl.addEventListener('click', function() {
//       // Redirect to another page when the button is clicked
//       window.location.href = 'file:///Users/maggiemcdowell/Documents/bootcamp/homework/blog-hw/blog.html'; // Replace 'https://www.example.com' with the URL you want to navigate to
//       window.location.replace("file:///Users/maggiemcdowell/Documents/bootcamp/homework/blog-hw/blog.html");
//   });