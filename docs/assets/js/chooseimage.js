fetch('/images.json')
    .then(response => response.json())
    .then(data => {
        const media = data.media;

        // Get all img elements in your document
        const images = document.getElementsByTagName("img");
        for(let i=0; i<images.length; i++) {
            let img = images[i];
            // Change src attribute only if it ends in .jpg, .png, or .gif
            let ext = img.src.split('.').pop();
            if (ext === "jpg" || ext === "png" || ext === "gif") {
                let randomIndex;
                let lastMedia = sessionStorage.getItem(`media-${i}`);
                do {
                    randomIndex = Math.floor(Math.random() * media.length);
                } while (media[randomIndex] === lastMedia);
                sessionStorage.setItem(`media-${i}`, media[randomIndex]);
                img.src = media[randomIndex];
            }
        }

        // Get all video elements in your document
        const videos = document.getElementsByTagName("video");
        for(let i=0; i<videos.length; i++) {
            let video = videos[i];
            let source = video.getElementsByTagName("source")[0];
            // Change src attribute only if it ends in .mp4
            let ext = source.src.split('.').pop();
            if (ext === "mp4") {
                let randomIndex;
                let lastMedia = sessionStorage.getItem(`media-${images.length + i}`);
                do {
                    randomIndex = Math.floor(Math.random() * media.length);
                } while (media[randomIndex] === lastMedia || media[randomIndex].split('.').pop() !== 'mp4');
                sessionStorage.setItem(`media-${images.length + i}`, media[randomIndex]);
                source.src = media[randomIndex];
                video.load();
            }
        }
    });
