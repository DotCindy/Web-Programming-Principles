// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt", files: [{type: "file", name: ""}]},
    {type: "file", name: "file2.txt", files: [{type: "file", name: ""}]},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt", files: [{type: "file", name: ""}]},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    var myFruitsContainer = document.querySelector("#fruitsContainer");
    var fruitsTag = "<p><ol>";
    for (var i = 0; i < fruits.length; i++) {
        fruitsTag += "<li>" + fruits[i] + "</li>";
    }
    fruitsTag += "</ol></p>";
    myFruitsContainer.innerHTML += fruitsTag;

    var myDirectoryContainer = document.querySelector("#directoryContainer");
    var dList = "<ul>";
    for (var i = 0; i < directory.length; i++) {
        dList += "<li>" + directory[i].name + "</li>";
        dList += "<ul>";
        for (var j = 0; j < directory[i].files.length; j++) {
            if (directory[i].files[j].type == "file") {
                dList += "<li>" + directory[i].files[j].name + "</li>";
            }
        }
        dList += "</ul>";
    }
    dList += "</ul>";
    myDirectoryContainer.innerHTML += dList;
};
