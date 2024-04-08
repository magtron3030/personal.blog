const nameEl = document.getElementById("name")
const title = document.getElementById("title")
const content = document.getElementById("content")
const form = document.querySelector("form")

form.addEventListener("submit", function(event){
  event.preventDefault()
  const nameValue = nameEl.value
  const titleValue = title.value
  const contentValue = content.value
  console.log(nameValue)
  
  let blogData = JSON.parse(localStorage.getItem("blogData"))
  if (blogData === null) {
    blogData = []
    blogData.push({
      userName: nameValue,
      title: titleValue,
      content: contentValue
    })

    localStorage.setItem("blogData", JSON.stringify(blogData))
    window.location.href = "./blog.html"
  }
  
  if (blogData) {
    blogData.push({
      userName: nameValue,
      title: titleValue,
      content: contentValue
    })

    localStorage.setItem("blogData", JSON.stringify(blogData))
    window.location.href = "./blog.html"
  }




}
)





  // } else {
 
 
//   const existingUser2 = JSON.parse(localStorage.getItem("userData2"))
//   if (existingUser2 === null) {
//   const userData2 = {userName: nameValue, title: titleValue, content: contentValue}
//   console.log(userData2)

//   localStorage.setItem("userData2", JSON.stringify(userData2))
//   window.location.href = "./blog.html"
//   } else {
//   const existingUser3 = JSON.parse(localStorage.getItem("userData3"))
//   if (existingUser3 === null) {
//     const userData3 = {userName: nameValue, title: titleValue, content: contentValue}
//     console.log(userData3)

//   localStorage.setItem("userData3", JSON.stringify(userData3))
//   window.location.href = "./blog.html"
//   } else {
//     const existingUser4 = JSON.parse(localStorage.getItem("userData4"))
//     if (existingUser4 === null) {
//       const userData4 = {userName: nameValue, title: titleValue, content: contentValue}
//       console.log(userData4)
  
//     localStorage.setItem("userData4", JSON.stringify(userData4))
//     window.location.href = "./blog.html"
//   }
// }}}
// })






// const buttonEl = document.querySelector('#submitbtn');
//   // Get the button element
// buttonEl.addEventListener("click", function(event){
//   event.preventDefault()
//   const nameValue = name.value
//   console.log(nameValue)
//   window.location.href = "./blog.html"
// })
// const titleEL = document.querySelector("submitbtn");

// titleEL.addEventListener("click", function(event){
//   event.preventDefault()
//   const titleValue = title.value
//   window.location.href = "./blog.html"
// })
// const contentEl = document.querySelector("#submitbtn")

// contentEl.addEventListener("click", function(event){
//   event.preventDefault()
//   const contentValue = content.value
//   window.location.href = "./blog.html"
// })






  
  
 


//   // Add a click event listener to the button
//   buttonEl.addEventListener('click', function() {
//       // Redirect to another page when the button is clicked
//       window.location.href = 'file:///Users/maggiemcdowell/Documents/bootcamp/homework/blog-hw/blog.html'; // Replace 'https://www.example.com' with the URL you want to navigate to
//       window.location.replace("file:///Users/maggiemcdowell/Documents/bootcamp/homework/blog-hw/blog.html");
//   });