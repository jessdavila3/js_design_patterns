(function() {
var catPics = document.getElementsByClassName("catPic");
var cats = ["Rocky", "Apollo", "Lola", "Bear"];
var counter = [0, 0, 0, 0];

var catInit = function(i) {
    var children = catPics[i].children;
    children[0].innerHTML = "<h1>" + cats[i] + "</h1>";
    children[2].innerHTML = counter[i];
    catPics[i].addEventListener('click', function() {
        this.children[2].innerHTML = ++counter[i];
    })
}

for(var i = 0; i < catPics.length; i++) {
    catInit(i);
}

} ());