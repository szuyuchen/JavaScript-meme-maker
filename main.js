// define variables
const createMemeBtn = document.querySelector(".meme-creator .create-meme-btn");
const memeImage = document.querySelector(".meme-creator img");
const memeTitle = document.querySelector(".meme-creator .meme-title");
const memeAuthor = document.querySelector(".meme-creator .meme-author");

// add a function called updateDetails
const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme created by: ${author}`;
}

// add a function + use fake API to get response from API
// then: to get response from json format 
// then: to extract the data from this response
// call a function named update detailed + (pass customized values)
const createMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
      updateDetails(data.url, data.title, data.author)
    });
};


// add createMemeBtn: when you click btn will call a function called createMeme
createMemeBtn.addEventListener("click", createMeme);

// generate meme when the page loads
createMeme();