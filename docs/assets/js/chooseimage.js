window.onload = function chooseMeme() {
    const memes = [
        "/assets/memes/meme1.jpg",
        "/assets/memes/meme2.jpg",
        "/assets/memes/meme3.jpg",
        "/assets/memes/meme4.jpg",
        "/assets/memes/meme5.jpg",
        "/assets/memes/meme6.jpg",
        "/assets/memes/meme7.jpg",
        "/assets/memes/meme8.jpg",
        "/assets/memes/meme9.jpg",
        "/assets/memes/meme10.jpg",
        "/assets/memes/meme11.jpg",
        "/assets/memes/meme12.jpg",
        "/assets/memes/meme13.jpg",
    ];
    let randomNumber = Math.floor(Math.random() * memes.length);
    document.getElementById("image-fetch").src = memes[randomNumber];
}
