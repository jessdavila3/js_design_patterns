(function() {
var catPics = document.getElementsByClassName("catPic");
var cats = ["Rocky", "Apollo", "Lola", "Bear"];
var counter = [0, 0, 0, 0];

var model = {
    
}

var view = {
    init: function() {
        var catTitle = document.getElementById("catTitle");
        var catPicture = document.getElementById("catPicture");
        var catCounter = document.getElementById("catCounter");
    }
}

var controller = {
    init: function() {
        model.init();
        view.init();
    },
    
}
// var catInit = function(i) {
//     var children = catPics[i].children;
//     children[0].innerHTML = "<h1>" + cats[i] + "</h1>";
//     children[2].innerHTML = counter[i];
//     catPics[i].addEventListener('click', function() {
//         this.children[2].innerHTML = ++counter[i];
//     })
// }

// for(var i = 0; i < catPics.length; i++) {
//     catInit(i);
// }
controller.init();
} ());