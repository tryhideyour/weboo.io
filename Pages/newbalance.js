let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'New Balance 550 Women Sneakers Shoes-Olive',
        image: 'New Balance 550 Women Sneakers Shoes-Olive.webp',
        price: 2099000
    },
    {
        id: 2,
        name: 'New Balance 327 Women Sneakers Shoes-Black',
        image: 'New Balance 327 Women Sneakers Shoes-Olive.webp',
        price: 1500000
    },
    {
        id: 3,
        name: 'New Balance 878 Men Sneakers Shoes-Grey',
        image: 'New Balance 878 Men Sneakers Shoes-Grey.webp',
        price: 2199000
    },
    {
        id: 4,
        name: 'New Balance 574 Men Sneakers Shoes-White',
        image: 'New Balance 574 Men Sneakers Shoes-White.webp',
        price: 1790000
    },
    {
        id: 5,
        name: 'New Balance 9060 Boys Sneakers Shoes-Grey ',
        image: 'New Balance 9060 Boys Sneakers Shoes-Grey.webp',
        price: 1399000
    },
    {
        id: 6,
        name: 'New Balance 327 mens Sneakers Shoes-Khaki',
        image: 'New Balance 327 mens Sneakers Shoes-Khaki.webp',
        price: 1599000
    },
    {
        id: 7,
        name: 'New Balance Fresh Foam Garoe Mens Running Shoes - Green',
        image: 'New Balance Fresh Foam Garoe Mens Running Shoes - Green.webp',
        price: 1599000
    },
    {
        id: 8,
        name: 'New Balance Fresh Foam Roav Mens Running Shoes - Black',
        image: 'New Balance Fresh Foam Roav Mens Running Shoes - Black.webp',
        price: 1599000
    },
    {
        id: 9,
        name: 'New Balance Fresh Foam 68v7 Mens Running Shoes - Black',
        image: 'New Balance Fresh Foam 68v7 Mens Running Shoes - Black.webp',
        price: 1599000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
   reloadCard();

}