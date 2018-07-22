// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function() {
    var myAudio = document.querySelector("#audioContainer");
    var figureTag = document.createElement("figure");

    figureTag.appendChild(getAudio(audio));
    figureTag.appendChild(getCaption("Audio Caption"));
    myAudio.appendChild(figureTag);
}

function getAudio(text) {
    var audioTag = document.createElement("audio");
    var myFigText = document.createTextNode(text);
    if (audioTag.canPlayType(audio.source[0].type)) {
        audioTag.setAttribute("src", audio.source[0].src);
    } else if (audioTag.canPlayType(audio.source[1].type)) {
        audio.setAttribute("src", audio.source[1].src);
    } else {
        "Your browser does not support the audio tag used."
    }
    audioTag.setAttribute("controls", audio.controls);
    audioTag.appendChild(myFigText);
    return audioTag;
}

function getCaption(text) {
    var captionTag = document.createElement("figcaption");
    var myFigText = document.createTextNode(text);
    captionTag.appendChild(myFigText);
    return captionTag;
}
