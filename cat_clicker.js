(function() {
var catPics = document.getElementsByClassName("catPic");
var counter = [0, 0, 0, 0];

var model = {
    cats: [{
        name: "Rocky",
        img: "cat.jpg",
        counter: 0
    },{
        name: "Monster",
        img: "cat2.jpg",
        counter: 0
    },{
        name: "Max",
        img: "cat3.jpg",
        counter: 0
    },{
        name: "Bosco",
        img: "cat4.jpg",
        counter: 0
    }],
}

var view = {
    init: function() {
        var catTitle = document.getElementById("catTitle");
        var catPicture = document.getElementById("catPicture");
        var catCounter = document.getElementById("catCounter");
    },
    initList: function() {
        this.catList = document.getElementById("catList");
        var htmlStr = '';
        model.cats.forEach(function(cat) {
            console.log(cat.name + " " + cat.counter + " " + cat.img);
            htmlStr += '<li><button>' +
            cat.name + 
            '</button></li>';
        })
        this.catList.innerHTML = htmlStr;
    },
    renderList: function() {
        var htmlStr = '';
    }
}

var controller = {
    init: function() {
        // model.init();
        view.init();
        view.initList();
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