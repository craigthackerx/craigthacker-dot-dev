fetch('/images.json')
    .then(response => response.json())
    .then(data => {
        const memes = data.images;

        // Get all img elements in your document
        const images = document.getElementsByTagName("img");
        for(let i=0; i<images.length; i++) {
            let img = images[i];
            // Change src attribute only if it ends in .jpg, .png, or .gif
            let ext = img.src.split('.').pop();
            if (ext === "jpg" || ext === "png" || ext === "gif") {
                let randomNumber = Math.floor(Math.random() * memes.length);
                img.src = memes[randomNumber];
            }
        }
    });
