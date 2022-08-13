/*---- js for toggle bar ----------*/
function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
  
    burger.addEventListener("click", function() {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }
navSlide();

/*---- js for image active-----*/


/*---- js for add to cart page ------*/

let shop = document.getElementById('product');

let ShopItemsData = 
    [{id:1,
    name:"Men Navy Blue Solid Sweatshirt",
    preview:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos:["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"],
    description:"Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size:[1,1,0,1,0],
    isAccessory:false,
    brand:"United Colors of Benetton",
    price:2599}
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = ShopItemsData
        .map((x) => {
            let {id, name,price,preview,photos, description,brand} = x;
            let search = basket.find((x) => x.id === id) || []
            return `
      
            <div class="left-column" id=${id}>
            <img id="productImg" id=mainImg src=${preview}>
          </div>
          <div class="right-column">
            <div class="product-description">
              <h1 id="name">${name}</h1>
              <h4 id="brand">${brand}</h4>
              <h3>Price: Rs <span id="price">${price}</h3>
              <div class="description">
                <h3>Description</h3>
                <p id="description">
                ${description}
                </p>
              </div>
              <div class="product-preview">
                <h3>Product Preview</h3>
                <div class="previewImg">
                    <img class="Img" id="img0" class="active" src=${preview}>
                    <img class="Img" id="img1" src=${photos}>
                    <img class="Img" id="img2" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg" alt="" />
                    <img class="Img" id="img3" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" alt="" />
                    <img class="Img" id="img4" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" alt="" />
                    <img class="Img" id="img5" src="" alt="" />
                </div>
              </div>
            </div>
              <div class="btn" >
                <button id="add-to-cart" id=${id} class="add-to-cart"   onclick="increment(${id})">Add to Cart  </button>
            
              </div>
          </div>
          
    
        `;
    }).join(""));

};



generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    
    
    if (search === undefined ){
        basket.push({
            id : selectedItem.id,
            item:1,
        });
    } else {
        search.item += 1;
    }

    localStorage.setItem("data" , JSON.stringify(basket));
    
    
   console.log(basket);
  calculation();
};
  


let calculation = () => {
    let cartIcon = document.getElementById("count");
    cartIcon.innerHTML = basket.map((x) => x.item ).reduce((x, y) => x + y, 0);
    
};
calculation();



