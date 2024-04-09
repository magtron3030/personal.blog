const mainTag = document.querySelector("main");

let blogData = JSON.parse(localStorage.getItem("blogData"));
console.log(blogData);

/*
<div class="container">
         <h2 class = "firstTitle">Blog Title</h2>
          <p class = "firstContent">here is my content </p>
          <p class = "firstName">Posted by:</p>
    </div>
*/

/* { title: "usgcudsgcu", content: "ugcvydgcd", userName: "ugcvydtcf7edgc" } */

function renderBlogEntries() {
  for (let i = 0; i < blogData.length; i++) {
    const article = blogData[i];

    const container = document.createElement("div");
    container.classList.add("container");

    const h2Tag = document.createElement("h2"); // create the h2 tag
    h2Tag.classList.add("firstTitle"); // give it a class (if needed)
    h2Tag.textContent = article.title; //put the content in for the tag
    container.appendChild(h2Tag); // add the tag to the container div

    const pTag = document.createElement("p");
    pTag.classList.add("firstContent");
    pTag.textContent = article.content;
    container.appendChild(pTag);

    const pTag2 = document.createElement("p");
    pTag2.classList.add("firstName");
    pTag2.textContent = "Posted by: " + article.userName;
    container.appendChild(pTag2);

    // You do the next two

    // append everything to the main tag
    mainTag.appendChild(container);
  }
}

renderBlogEntries();


//Dark to light mode 
const body = document.querySelector("body")
const star = document.querySelector(".sun")
let mode = "dark";

star.addEventListener("click", function() {
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'light');
  }   else {
    mode = 'dark';
    body.setAttribute('class', 'dark');
  }
});


//back button
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
   window.location.href = "./index.html"
})


