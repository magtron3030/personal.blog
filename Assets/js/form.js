const nameEl = document.getElementById("name");
const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameEl.value;
  const titleValue = title.value;
  const contentValue = content.value;
  console.log(nameValue);

  let blogData = JSON.parse(localStorage.getItem("blogData")) || [];
  if (blogData === null) {
    blogData.push({
      userName: nameValue,
      title: titleValue,
      content: contentValue,
    });

    localStorage.setItem("blogData", JSON.stringify(blogData));
    window.location.href = "./blog.html";
  }

  if (blogData) {
    blogData.push({
      userName: nameValue,
      title: titleValue,
      content: contentValue,
    });

    localStorage.setItem("blogData", JSON.stringify(blogData));
    window.location.href = "./blog.html";
  }
});

//Dark light mode
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

