// Fetch images.json file from the server
fetch('/images.json')
    // Convert the raw response into text format
    .then(response => response.text())
    // Remove trailing comma and parse the text as JSON
    .then(text => {
        const jsonString = text.replace(/,\s*$/, "");
        const data = JSON.parse(jsonString);

        // Extract the list of media files from the parsed JSON
        const media = data.media;

        // Get all img elements in your document
        const images = document.getElementsByTagName("img");
        // Loop through each img element
        for(let i=0; i<images.length; i++) {
            let img = images[i];
            // Get the extension of the current img src
            let ext = img.src.split('.').pop();
            // If the extension is jpg, png, or gif
            if (ext === "jpg" || ext === "png" || ext === "gif") {
                let randomIndex;
                // Get the last selected media for this img element from session storage
                let lastMedia = sessionStorage.getItem(`media-${i}`);
                // Keep generating random indices until a different media file is selected
                do {
                    randomIndex = Math.floor(Math.random() * media.length);
                } while (media[randomIndex] === lastMedia);
                // Store the selected media file in session storage
                sessionStorage.setItem(`media-${i}`, media[randomIndex]);
                // Set the src of the img element to the selected media file
                img.src = media[randomIndex];
            }
        }

        // Get all video elements in your document
        const videos = document.getElementsByTagName("video");
        // Loop through each video element
        for(let i=0; i<videos.length; i++) {
            let video = videos[i];
            // Get the source element of the video
            let source = video.getElementsByTagName("source")[0];
            // Get the extension of the current source src
            let ext = source.src.split('.').pop();
            // If the extension is mp4
            if (ext === "mp4") {
                let randomIndex;
                // Get the last selected media for this video from session storage
                let lastMedia = sessionStorage.getItem(`media-${images.length + i}`);
                // Keep generating random indices until a different mp4 file is selected
                do {
                    randomIndex = Math.floor(Math.random() * media.length);
                } while (media[randomIndex] === lastMedia || media[randomIndex].split('.').pop() !== 'mp4');
                // Store the selected mp4 file in session storage
                sessionStorage.setItem(`media-${images.length + i}`, media[randomIndex]);
                // Set the src of the source element to the selected mp4 file
                source.src = media[randomIndex];
                // Load the new video source
                video.load();
            }
        }
    });
