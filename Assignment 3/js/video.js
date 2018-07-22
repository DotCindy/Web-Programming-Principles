// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload = function() {
    var myVideo = document.querySelector("#videoContainer");
    var figureTag = document.createElement("figure");

    figureTag.appendChild(getVideo(video));
    figureTag.appendChild(getCaption("Video Caption"));
    myVideo.appendChild(figureTag);
}

function getVideo(text) {
    var videoTag = document.createElement("video");
    videoTag.setAttribute("width", video.width);
    videoTag.setAttribute("height", video.height);
    var myFigText = document.createTextNode(text);
    if (videoTag.canPlayType(video.source[0].type)) {
        videoTag.setAttribute("src", video.source[0].src);
    } else if (videoTag.canPlayType(video.source[1].type)) {
        videoTag.setAttribute("src", video.source[1].src);
    } else {
        videoTag.setAttribute("src", video.source[2].type);
    }
    videoTag.setAttribute("controls", video.controls);
    videoTag.appendChild(myFigText);
    return videoTag;
}

function getCaption(text) {
    var captionTag = document.createElement("figcaption");
    var myFigText = document.createTextNode(text);
    captionTag.appendChild(myFigText);
    return captionTag;
}
