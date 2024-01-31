const products = [
    {
        "id": 1,
        "name": "Desk",
        "category": "Furniture",
        "price": 299.99,
        "img": "https://img.freepik.com/free-photo/view-computer-monitor-display-with-desk_23-2150757509.jpg?t=st=1703435238~exp=1703438838~hmac=b17f222012c9cfccc5d085e64df87737c787489273e31cdda6bd8c8277d57bd4&w=1380"
    },
    {
        "id": 2,
        "name": "Chandelier",
        "category": "Lighting",
        "price": 159.99,
        "img": "https://img.freepik.com/free-photo/glowing-crystal-chandelier-illuminates-modern-luxury-home-interior-generated-by-ai_188544-45040.jpg?t=st=1703595452~exp=1703599052~hmac=9a787964b049c5d7fed735d5498f96959ee5c9c359ac5f246228f697c389d594&w=1800"
    },
    {
        "id": 3,
        "name": "Bathroom Set",
        "category": "Bathroom",
        "price": 39.99,
        "img": "https://img.freepik.com/free-photo/shallow-shot-modern-sink-beside-bottle-bathroom_181624-37589.jpg?w=1480&t=st=1703426692~exp=1703427292~hmac=8d55e66722f35474c9955a9e75110433639c32150a3b9d0ab9637be74b2915a9"
    },
    {
        "id": 4,
        "name": "Sofa",
        "category": "Furniture",
        "price": 599.99,
        "img": "https://img.freepik.com/free-photo/sofa-green-living-room-with-copy-space_43614-905.jpg?w=1380&t=st=1703435152~exp=1703435752~hmac=eb307b11980402e024c3ea74aa3264296d8a04d30104933dd1f0d4ebdc514e35"
    },
    {
        "id": 5,
        "name": "Table Lamp",
        "category": "Lighting",
        "price": 39.99,
        "img": "https://img.freepik.com/free-photo/luxury-modern-room-with-elegant-decoration-lighting-generated-by-ai_188544-21356.jpg?w=1800&t=st=1703438613~exp=1703439213~hmac=065d25a3940ff2e7f16550fddf4abb73f35a50893dc6b5067dd975acb0d7c568"
    },
    {
        "id": 6,
        "name": "Toilet",
        "category": "Bathroom",
        "price": 100.99,
        "img": "https://img.freepik.com/free-photo/small-bathroom-with-modern-design_23-2150700288.jpg?t=st=1703426793~exp=1703430393~hmac=abe1548fa03c1fdec903ecfcacb2083860da32b5358546ec557f2595d88b3115&w=1380"
    },
    {
        "id": 7,
        "name": "Microwave Oven",
        "category": "Kitchen",
        "price": 79.99,
        "img": "https://img.freepik.com/free-photo/close-up-oven-with-golden-details_23-2148848652.jpg?w=1480&t=st=1703437417~exp=1703438017~hmac=ab5af6a01787aaa8e074d2fa355e0f4b02778f6357d866e75786d755585592fe"
    },
    {
        "id": 8,
        "name": "Chair",
        "category": "Furniture",
        "price": 149.99,
        "img": "https://img.freepik.com/free-photo/furniture-modern-studio-lifestyle-green_1122-1837.jpg?1&w=1380&t=st=1703595778~exp=1703596378~hmac=970504a5373a10252aac7cd27438bb7decd7fdd3b5ce5e04dac3ea02dec5188d"
    },
    {
        "id": 9,
        "name": "Chandelier",
        "category": "Lighting",
        "price": 59.99,
        "img": "https://img.freepik.com/free-photo/close-up-picture-unrealistic-hanging-chandelier_8353-10602.jpg?w=1480&t=st=1703595555~exp=1703596155~hmac=b16771d399edac22040f644c7978deb59224ab199b9c9aafeebac513e039c78e"
    },
    {
        "id": 10,
        "name": "Toilet Paper Holder",
        "category": "Bathroom",
        "price": 12.99,
        "img": "https://img.freepik.com/free-photo/lady-pulling-tissue-toilet_1150-6434.jpg?w=1480&t=st=1703426882~exp=1703427482~hmac=1f2374b4771993cdd7e9da57e9c24a23bb67c25caabbbe287ffd4043e5b79495"
    },
    {
        "id": 11,
        "name": "Coffee Maker",
        "category": "Kitchen",
        "price": 49.99,
        "img": "https://img.freepik.com/free-photo/view-coffee-machine_23-2149709953.jpg?w=1480&t=st=1703437518~exp=1703438118~hmac=9d87b765cdd8f463b255abb71614f89fc6eaa9e320d967e91499dedb300d389b"
    },
    {
        "id": 12,
        "name": "Bookshelf",
        "category": "Furniture",
        "price": 129.99,
        "img": "https://img.freepik.com/free-photo/room-interior-design_23-2148899489.jpg?w=1380&t=st=1703435322~exp=1703435922~hmac=ee6bb578e3515a2f502149b8cbf2d3d533dc214e3d84e4a251a90009a3db5eca"
    },
    {
        "id": 13,
        "name": "Desk Lamp",
        "category": "Lighting",
        "price": 29.99,
        "img": "https://img.freepik.com/free-photo/modern-elegance-illuminates-comfortable-living-room-decor-design-generated-by-ai_188544-21602.jpg?w=1800&t=st=1703438716~exp=1703439316~hmac=925febdf97ca471860158b6c9b896b73b316861a12b9bb6eaea442c0aa3b9776"
    },
    {
        "id": 14,
        "name": "Blender",
        "category": "Kitchen",
        "price": 39.99,
        "img": "https://img.freepik.com/free-photo/side-view-metallic-professional-juicer-with-empty-glass-is-prepa_346278-689.jpg?w=1480&t=st=1703437674~exp=1703438274~hmac=5c55ef3647260dcf106dddabeee34454164573c77aa6ad572e2ce4f2c6493ced"
    },
    {
        "id": 15,
        "name": "Wall Mirror",
        "category": "Bathroom",
        "price": 49.99,
        "img": "https://img.freepik.com/free-photo/anti-dandruff-products-by-bathroom-sink_23-2149345770.jpg?w=1480&t=st=1703426916~exp=1703427516~hmac=0e0464833adc975e7d1bcecdfceb222a6016a640c3d9732abc78002f925157ed"
    },
    {
        "id": 16,
        "name": "Bedside Table",
        "category": "Furniture",
        "price": 299.99,
        "img": "https://img.freepik.com/free-photo/white-comfortable-pillow-blanket-bed-with-light-lamp_74190-12052.jpg?w=1480&t=st=1703435429~exp=1703436029~hmac=59bc16e45139f28508e45053f67ef983a785f7aa8e7eb3686c7e6b76827c0894"
    },
    {
        "id": 17,
        "name": "Dining Table",
        "category": "Furniture",
        "price": 199.99,
        "img": "https://img.freepik.com/free-photo/dining-room-background-zoom-calls_23-2149684443.jpg?w=1480&t=st=1703435611~exp=1703436211~hmac=a23c41ee04e989b26a83d6a5be09020214973826f8cab1f05d0b8c5e59e420f3"
    },
    {
        "id": 18,
        "name": "Toaster",
        "category": "Kitchen",
        "price": 29.99,
        "img": "https://img.freepik.com/free-photo/bread-toaster-kitchen_74190-3995.jpg?w=1480&t=st=1703437824~exp=1703438424~hmac=d9a5d02030389f3ea51be5219bc4612529c5383337779752c92711fb3d640cf1"
    },
    {
        "id": 19,
        "name": "Pendant Light",
        "category": "Lighting",
        "price": 79.99,
        "img": "https://img.freepik.com/free-photo/lamp-thai-style_1150-18012.jpg?w=1480&t=st=1703595673~exp=1703596273~hmac=7bb3267a0d95ea97be3a20cdfccc7b6a2cd9ae096098ac5593beaa457a96740e"
    },
    {
        "id": 20,
        "name": "Soap Dispenser",
        "category": "Bathroom",
        "price": 9.99,
        "img": "https://img.freepik.com/free-photo/blue-glass-soap-bottle-isolated-white-wall_181624-29529.jpg?w=1480&t=st=1703427006~exp=1703427606~hmac=088636bbc43878bb507e4cc49b6a7bb88637a18b55e60121161a3b7cd9e938b8"
    },
    {
        "id": 21,
        "name": "Cabinet",
        "category": "Furniture",
        "price": 89.99,
        "img": "https://img.freepik.com/free-photo/wood-sideboard-living-room-interior-with-copy-space_43614-827.jpg?w=1380&t=st=1703435670~exp=1703436270~hmac=bd87df9329a16d69c65bc6c329b5a04fa789c08649b0d56c31630a3057faf188"
    },
    {
        "id": 22,
        "name": "Cutting Board",
        "category": "Kitchen",
        "price": 14.99,
        "img": "https://img.freepik.com/free-photo/top-view-fresh-vegetables-dark-background-cooking-cake-job-biscuit-bake-dough-pastry-pie_179666-46337.jpg?w=1480&t=st=1703437914~exp=1703438514~hmac=0d4db8e5a4979d532946989d227d8f2b0db5a843af9d24fe03708287b3552916"
    },
    {
        "id": 23,
        "name": "Coffee Table",
        "category": "Furniture",
        "price": 149.99,
        "img": "https://img.freepik.com/free-photo/side-view-cup-coffee-small-round-table-horizontal_176474-2487.jpg?w=1480&t=st=1703435776~exp=1703436376~hmac=2c6870af425ecb89cefb14c23d91319cb66def23db90e30fa033f51f222b8392"
    },
    {
        "id": 24,
        "name": "Floor Lamp",
        "category": "Lighting",
        "price": 59.99,
        "img": "https://img.freepik.com/free-vector/floor-lamp-realistic-background-illustrated-classic-torchiere-with-cylindrical-lampshade-3d-illustration_1284-65163.jpg?w=1060&t=st=1703595723~exp=1703596323~hmac=1f2b44d5c7955287c72c9dea19858fd025d4100fe1b0690b1bd797c20973f10b"
    },
    {
        "id": 25,
        "name": "Shower",
        "category": "Bathroom",
        "price": 24.99,
        "img": "https://img.freepik.com/free-photo/shower-head-with-hot-water_23-2149088614.jpg?w=1480&t=st=1703426533~exp=1703427133~hmac=44d595e2d7351409718dfce90ad13e48a1faf0873de8eddf00a7e0c67b2354ae"
    },
    {
        "id": 26,
        "name": "Chair",
        "category": "Furniture",
        "price": 89.99,
        "img": "https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811458.jpg?w=1380&t=st=1703435885~exp=1703436485~hmac=b99e6684fbc33fba1ea826d59fdd7d0859a2c73d3de235d253ae63c8aa9588d5"
    },
    {
        "id": 27,
        "name": "Kitchen Sink",
        "category": "Kitchen",
        "price": 199.99,
        "img": "https://img.freepik.com/free-photo/black-faucet-with-steel-sink-stylish-modern-kitchen_169016-20021.jpg?w=1800&t=st=1703437187~exp=1703437787~hmac=eadb468c00247b453f71dbfb0d4f3aebeeb656badaa2f6eee23b17f9921cb39b"
    }
]




document.addEventListener('DOMContentLoaded', displayBathroomProducts)
document.addEventListener('DOMContentLoaded', displayFurnitureProducts)
document.addEventListener('DOMContentLoaded', displayKitchenProducts)
document.addEventListener('DOMContentLoaded', displayLightingProducts)
document.addEventListener('DOMContentLoaded', () => {
    // Extract the product ID from the query parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('productId');

    if (productId) {
        createSingleProduct(productId);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // Add event listener to the "Add to cart" button
    const addToCartButton = document.querySelector('.add_to_cart');
    addToCartButton.addEventListener('click', () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const productId = urlParams.get('productId');
        const product = getProduct(productId);

        if (product) {
            addToCart(product);
            displayCartItems();
        }
    });
});



document.addEventListener('DOMContentLoaded', displayCartItems)


const arrows = document.querySelectorAll('.arrow'),
    offer_text = document.querySelectorAll('.offer_text'),
    sideNav = document.querySelector('.sideNav'),
    bathroom_products_container = document.querySelector('.bathroom_products_container'),
    furniture_products_container = document.querySelector('.furniture_products_container'),
    kitchen_products_container = document.querySelector('.kitchen_products_container'),
    lighting_products_container = document.querySelector('.lighting_products_container')


// console.log(arrows)
// console.log(bathroom_products_container)

let count = 0;

function showOffer() {
    offer_text[0].style.display = 'block';
}
showOffer();


arrows.forEach((arrow) => {

    arrow.addEventListener('click', (e) => {

        if (e.target.classList.contains('left')) {
            offer_text[count].style.display = 'none';
            count--;
            if (count >= 0) {
                offer_text[count].style.display = 'block';
            }
            else {
                count = offer_text.length - 1;
                offer_text[count].style.display = 'block';
            }
        }

        else if (e.target.classList.contains('right')) {
            offer_text[count].style.display = 'none';
            count++;
            if (count <= offer_text.length - 1) {
                offer_text[count].style.display = 'block';
            }
            else {
                count = 0;
                offer_text[count].style.display = 'block';
            }
        }
    })
})


function openSideNav() {
    sideNav.style.display = 'flex';
}

function closeSideNav() {
    sideNav.style.display = 'none';
}

function createProductCard(product) {

    const productCard = document.createElement('div');
    productCard.classList.add('product');


    // product-image
    const img = document.createElement('img')
    img.src = product.img;

    // product-info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product_info');
    productInfo.innerHTML = `<p>${product.name}</p><p>$${product.price}</p>`;


    // cart-like-icon
    const product_icons = document.createElement('div');
    product_icons.classList.add('product_icons');
    product_icons.innerHTML = '<i class="fa-solid fa-cart-plus"></i><i class="fa-regular fa-heart"></i>'

    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    productCard.appendChild(product_icons);

    productCard.addEventListener('click', () => openProductPage(product.id));

    return productCard;
}

function displayBathroomProducts() {
    const bathroomProducts = products.filter((product) => product.category == 'Bathroom');

    bathroomProducts.map(product => {
        const productCard = createProductCard(product);
        bathroom_products_container.appendChild(productCard);
    })
}

function displayFurnitureProducts() {
    const furnitureProducts = products.filter((product) => product.category == 'Furniture');

    furnitureProducts.map(product => {
        const productCard = createProductCard(product);
        furniture_products_container.appendChild(productCard);
    })
}

function displayKitchenProducts() {
    const kitchenProducts = products.filter((product) => product.category == 'Kitchen');

    kitchenProducts.map(product => {
        const productCard = createProductCard(product);
        kitchen_products_container.appendChild(productCard);
    })
}

function displayLightingProducts() {
    const lightingProducts = products.filter((product) => product.category == 'Lighting');

    lightingProducts.map(product => {
        const productCard = createProductCard(product);
        lighting_products_container.appendChild(productCard);
    })
}

function openProductPage(productId) {
    window.location.href = `Product_Page.html?productId=${productId}`;
}

function getProduct(productId) {
    return products.find(product => product.id == productId)
}

function createSingleProduct(productId) {
    const product_container = document.querySelector('.product_container');
    const product = getProduct(productId);
    // console.log(product_container)
    // console.log(product)

    if (product) {

        // product-page-left-section
        const product_left = document.createElement('div')
        product_left.classList.add('product_left')
        product_left.innerHTML = `<img class="product_img" src=${product.img}>`


        // product-page-right-section
        const product_right = document.createElement('div')
        product_right.classList.add('product_right')
        // console.log(product_left)

        product_right.innerHTML = `
                <h4>${product.name}</h4>
                <h2>$${product.price}</h2>
                <div class="quantity_selector">
                <button>-</button>
                <p class="quantity">1</p>
                <button>+</button>
                </div>
                <button class="add_to_cart">Add to cart</button>
                <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="text">
                    <h4>Product Details</h4>
                    <span>Drawing inspiration from the archives, the Kernen lighting collection combines
                        classic and modern influences in a timeless expression for the home. The combination of textured
                        coining
                        details and elegant milk glass imbues the design with an updated vintage charm. </span>
                </div>
        `

        product_container.appendChild(product_left);
        product_container.appendChild(product_right);
    }
}





// cart
// let cartStorage = [];
let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cartStorage.push(product);
    updateCartStorage();
    // console.log(cartStorage)
}

// console.log(cartStorage);

function createCartitem(product) {
    const items_container = document.createElement('div');
    items_container.setAttribute('product-id', product.id);
    items_container.classList.add('items_container');

    const row1 = document.createElement('div');
    row1.classList.add('item_row');
    row1.innerHTML = `
            <div class="col1">
                <div class="item_img">
                    <img src=${product.img}
                    alt="">
                </div>
                <div class="item_details">
                    <p>${product.name}</p>
                </div>
            </div>
            <div class="col2">
                <div class="item_price">$${product.price}</div>
                <div class="quantity">quantity</div>
                <div class="total_price">$129</div>
            </div>
        `;

    const row2 = document.createElement('div');
    row2.classList.add('row2');
    row2.innerHTML = '<div class="remove">Remove</div>'

    items_container.appendChild(row1);
    items_container.appendChild(row2);

    return items_container;
}

function displayCartItems() {
    console.log('Displaying cart items...');
    const cart_items_container = document.querySelector('.itemAndRemove');

    cart_items_container.innerHTML = '';

    cartStorage.map((product) => {
        const singleItem = createCartitem(product);
        cart_items_container.appendChild(singleItem);
    })
}

function updateCartStorage() {
    console.log('Updating cart storage...');
    localStorage.setItem('cart', JSON.stringify(cartStorage))
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        const itemContainer = e.target.parentElement.parentElement;
        const productId = itemContainer.getAttribute('product-id');

        removeCartItem(productId);
        updateCartStorage();
        displayCartItems()
    }
});


function removeCartItem(productId) {
    const index = cartStorage.findIndex(product => {
        return product.id == Number(productId)
    })
    // console.log(index)
    cartStorage.splice(index, 1)
}