document.querySelectorAll(".grid video").forEach(function(video) {
    video.onmouseenter = () => {
        video.play()
    }
    video.onmouseleave = () => {
        video.pause()
    }
})