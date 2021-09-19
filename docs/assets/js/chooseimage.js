let images = [
    "/assets/memes/meme1.jpg",
    "/assets/memes/meme2.jpg",
    "/assets/memes/meme3.jpg",
    "/assets/memes/meme4.jpg",
    "/assets/memes/meme5.jpg",
    "/assets/memes/meme6.jpg"
];

function chooseImage() {
    let randomNumber = Math.floor(Math.random() * images.length);
    document.getElementById("image-fetch").src = images[randomNumber];
}

window.onload = chooseImage;
