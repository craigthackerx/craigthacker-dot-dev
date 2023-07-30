let currentURL = window.location.pathname;

fetch('/images.json')
    .then(response => response.json())
    .then(data => {
        if (currentURL !== "/memes") return;

        const media = data.media;

        let img = document.getElementById("image-fetch");
        if (img) {
            let ext = img.src.split('.').pop();
            if (ext === "jpg" || ext === "png" || ext === "gif") {
                let randomIndex;
                let lastMedia = sessionStorage.getItem('media');
                do {
                    randomIndex = Math.floor(Math.random() * media.length);
                } while (media[randomIndex] === lastMedia);
                sessionStorage.setItem('media', media[randomIndex]);
                img.src = media[randomIndex];
            }
        }

        const videos = document.getElementsByTagName("video");
        for(let i=0; i<videos.length; i++) {
            let video = videos[i];
            let source = video.getElementsByTagName("source")[0];
            let ext = source.src.split('.').pop();
            if (ext === "mp4") {
                let randomIndex;
                let lastMedia = sessionStorage.getItem(`media-video-${i}`);
                do {
                    randomIndex = Math.floor(Math.random() * media.length);
                } while (media[randomIndex] === lastMedia || media[randomIndex].split('.').pop() !== 'mp4');
                sessionStorage.setItem(`media-video-${i}`, media[randomIndex]);
                source.src = media[randomIndex];
                video.load();
            }
        }
    });
