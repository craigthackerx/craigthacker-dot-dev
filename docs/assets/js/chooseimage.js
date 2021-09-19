let memes = [
    "/assets/memes/meme1.jpg",
    "/assets/memes/meme2.jpg",
    "/assets/memes/meme3.jpg",
    "/assets/memes/meme4.jpg",
    "/assets/memes/meme5.jpg",
    ".assets/memes/meme6.jpg"
];

window.onload = function chooseMeme() {
    let randomNumber = Math.floor(Math.random() * memes.length);
    document.getElementById("image-fetch").src = memes[randomNumber];
}