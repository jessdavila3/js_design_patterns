(function() {

var model = {
    selectedCat: null,
    cats: [{
        name: "Rocky",
        img: "img/cat.jpg",
        counter: 0
    },{
        name: "Monster",
        img: "img/cat2.jpg",
        counter: 0
    },{
        name: "Max",
        img: "img/cat3.jpg",
        counter: 0
    },{
        name: "Bosco",
        img: "img/cat4.jpg",
        counter: 0
    }],
}

var catView = {
    init: function() {
        var catTitle = document.getElementById("catTitle");
        var catPicture = document.getElementById("catPicture");
        var catCounter = document.getElementById("catCounter");
        this.render();
    },
    render: function() {
        var currentCat = controller.getSelectedCat();
        console.log(currentCat);
        catTitle.innerHTML = currentCat.name;
        catPicture.src = currentCat.img;
        catCounter.innerHTML = currentCat.counter;
    }
}

var catListView = {
    init: function () {
        this.catList = document.getElementById("catList");
        var htmlStr = '';
        model.cats.forEach(function (cat) {
            console.log(cat.name + " " + cat.counter + " " + cat.img);
            htmlStr += '<li><button class="cat-button">' +
                cat.name +
                '</button></li>';
        })
        this.catList.innerHTML = htmlStr;
    },
}

var controller = {
    init: function() {
        model.selectedCat = model.cats[0];
        catView.init();
        catListView.init();
    },
    getSelectedCat: function() {
        return model.selectedCat;
    }
    
}
controller.init();
} ());