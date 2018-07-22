var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;
function loadTableWithFilters() {
    var mainTableBody = document.querySelector("#main-table-body");
    mainTableBody.innerHTML = "";
    for (var i = 0; i < petData.length; i++) {
        if ((filterType == petData[i].type || filterType == "") && 
            petData[i].age >= filterAgeMin && 
            petData[i].age <= filterAgeMax) {
            var row = document.createElement("tr");
            row.appendChild(getPhoto(petData[i].image.src, petData[i].image.alt,
                petData[i].image.width, petData[i].image.height));
            row.appendChild(getDescription(petData[i].name, petData[i].description, petData[i].age));
            mainTableBody.appendChild(row);
        }
    }
}

function getPhoto(src, alt, width, height) {
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", src);
    imgTag.setAttribute("alt", alt);
    imgTag.setAttribute("width", width);
    imgTag.setAttribute("height", height);
    var imgText = document.createTextNode(src, alt, width, height);
    imgTag.appendChild(imgText);

    var cell = document.createElement("td");
    cell.appendChild(imgTag);
    return cell;
}

function getDescription(name, desc, age) {
    var h4Tag = document.createElement("h4");
    h4Tag.setAttribute("name", name);
    var nameText = document.createTextNode(name);
    h4Tag.appendChild(nameText);

    var pTag = document.createElement("p");
    pTag.innerHTML = desc;

    var spanTag = document.createElement("span");
    spanTag.setAttribute("age", age);
    var ageText = document.createTextNode("Age: " + age + " years old.");
    spanTag.appendChild(ageText); 

    var cell = document.createElement("td");
    cell.appendChild(h4Tag);
    cell.appendChild(pTag);
    cell.appendChild(spanTag);
    return cell;
}

function filterDog() {
    filterType = "dog";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterCat() {
    filterType = "cat";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterBird() {
    filterType = "bird";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filter_zero_1() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3() {
    filterType = "";
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus() {
    filterType = "";
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
