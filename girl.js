// product constructor
function Shoe(name, size, color, price, image) {
    this.name  = name;
    this.size  = size;
    this.color = color;
    this.price = price;
    this.image = image;
}

// create new products from the product constructor
var blueshoe  = new Shoe("Sarah J. Parker", "S/M/L", "Blue", 199.99, "http://a3.zassets.com/images/z/4/1/2/8/5/1/4128514-p-MULTIVIEW.jpg");
var blackshoe = new Shoe("Michael Kors", "S/M/L", "Black", 79.99, "https://m.media-amazon.com/images/I/711CjNRn1pL._SX480_.jpg");
var stripeshoe = new Shoe("Sam Edelman", "S/M/L", "Black and White", 99.99, "https://m.media-amazon.com/images/I/81IGv4Fe5ML._SX480_.jpg");
var leopardshoe = new Shoe("Bella Vita", "S/M/L", "Leopard", 69.99, "http://a3.zassets.com/images/z/4/1/3/3/2/2/4133222-p-MULTIVIEW.jpg");
var confettishoe  = new Shoe("Chinese Laundry", "S/M/L", "Rainbow", 54.99, "http://a2.zassets.com/images/z/4/1/4/4/2/5/4144253-p-MULTIVIEW.jpg");
var redshoe = new Shoe("Steve Madden", "S/M/L", "Red", 119.99, "http://a3.zassets.com/images/z/4/1/7/8/6/8/4178688-p-MULTIVIEW.jpg");
var greenshoe = new Shoe("Rupert Sanderson", "S/M/L", "Green", 169.99, "http://a1.zassets.com/images/z/4/2/1/5/0/7/4215078-p-MULTIVIEW.jpg");
var whiteshoe = new Shoe("J. Renee", "S/M/L", "White", 149.99, "http://a3.zassets.com/images/z/4/1/1/6/7/0/4116707-p-MULTIVIEW.jpg");
var bootieshoe = new Shoe("Giuseppe Zanotti", "S/M/L", "Black", 499.99, "http://a1.zassets.com/images/z/4/1/4/1/3/5/4141351-p-MULTIVIEW.jpg");

// create an array to add products to
var shoeArray = [];

// add products to array of products
shoeArray.push(blueshoe, blackshoe, stripeshoe, leopardshoe, confettishoe, redshoe, greenshoe, whiteshoe, bootieshoe);

// loop through products array
for (var i = 0; i < shoeArray.length; i++) {
    // create new elements for each product
    var newItem  = document.createElement("div");
    var newDiv   = document.createElement("div");
    var nameH1   = document.createElement("h1");
    var sizeH4   = document.createElement("h4");
    var colorH4  = document.createElement("h4");
    var priceH4  = document.createElement("h4");
    var btn      = document.createElement("button");
    var image    = document.createElement("img");

    // create text for new elements
    var sName   = document.createTextNode(shoeArray[i].name);
    var sSize   = document.createTextNode("Available size: " + shoeArray[i].size);
    var sColor  = document.createTextNode("Color: " + shoeArray[i].color);
    var sPrice  = document.createTextNode("Price: $" + shoeArray[i].price);
    var sButton = document.createTextNode("BUY");

    btn.appendChild(sButton);
    btn.onclick = function() {
        window.location.href = 'warning.html';
    };

    // update source attribute
    image.src = shoeArray[i].image;

    // update class attributes
    image.className = "img-responsive";
    btn.className = "btn btn-primary btn-lg";
    newItem.className = "col-sm-4";
    newDiv.className = "shoe shoeName" + [i] + " thumbnail";

    // add text to elements
    nameH1.appendChild(sName);
    sizeH4.appendChild(sSize);
    colorH4.appendChild(sColor);
    priceH4.appendChild(sPrice);
    btn.appendChild(sButton);

    // add elements to new div
    newDiv.appendChild(nameH1);
    newDiv.appendChild(image);
    newDiv.appendChild(sizeH4);
    newDiv.appendChild(colorH4);
    newDiv.appendChild(priceH4);
    newDiv.appendChild(btn);

    // add new div to new item div
    newItem.appendChild(newDiv);

    // add new item to the element with id="products"
    document.getElementById("products").appendChild(newItem);
}
