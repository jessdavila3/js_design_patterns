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
        catPicture.addEventListener('click', function() {
            controller.incrementCounter();
        })
        this.render();
    },
    render: function() {
        var currentCat = controller.getSelectedCat();
        catTitle.innerHTML = currentCat.name;
        catPicture.src = currentCat.img;
        catCounter.innerHTML = currentCat.counter;
    }
}

var catListView = {
    init: function () {
        var catList = document.getElementById("catList");
        this.render();
    },
    render: function () {
        var li, button, cat;
        var cats = controller.getAllCats();
        cats.forEach(function (cat) {
            li = document.createElement('li');
            li.innerText = cat.name;

            li.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setSelectedCat(catCopy);
                    catView.render();
                };
            })(cat));
            this.catList.appendChild(li);
        })
    }
}

var adminView = {
    init: function() {
        var adminSection = document.getElementById("adminSection");
        var adminBtn = document.getElementById("adminBtn");
        var name = document.getElementById("name");
        var url = document.getElementById("url");
        var numOfClicks = document.getElementById("numOfClicks");
        this.render();
        
    },
    render: function() {
        var currentCat = controller.getSelectedCat();
        console.log(currentCat+document.getElementById("name"));
        // name.value = 'world';
        // name.value = currentCat.name;
    }
}

var controller = {
    init: function() {
        model.selectedCat = model.cats[0];
        catView.init();
        catListView.init();
        adminView.init();
    },
    getSelectedCat: function() {
        return model.selectedCat;
    },
    getAllCats: function() {
        return model.cats;
    },
    setSelectedCat: function(cat) {
        model.selectedCat = cat;
    },
    incrementCounter: function() {
        model.selectedCat.counter++;
        catView.render();
    }
}
controller.init();
} ());