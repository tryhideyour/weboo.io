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
        name: 'Air Jordan 1 Retro High OG',
        image: 'Air Jordan Retro High.webp',
        price: 120000
    },
    {
        id: 2,
        name: 'Nike Air Force 1',
        image: 'Nike Air Force 1.webp',
        price: 120000
    },
    {
        id: 3,
        name: 'Nike Air Force 1',
        image: 'Nike Air Force 1.2.webp',
        price: 220000
    },
    {
        id: 4,
        name: 'Nike Air Force 1',
        image: 'Nike Air Force 1.3.webp',
        price: 123000
    },
    {
        id: 5,
        name: 'Nike Air Max Pulse',
        image: 'Nike Air Max Pulse.webp',
        price: 320000
    },
    {
        id: 6,
        name: 'Nike Air Max Pulse III',
        image: 'Nike Air Max Pulse III.webp',
        price: 120000
    },
    {
        id: 7,
        name: 'Nike Air Force 1',
        image: 'Nike Air Force 1.4.webp',
        price: 120000
    },
    {
        id: 8,
        name: 'Air Jordan 1 Low OG',
        image: 'Air Jordan 1 Low OG.webp',
        price: 120000
    },
    {
        id: 9,
        name: 'Nike Dunk Low SE',
        image: 'Nike Dunk Low SE.webp',
        price: 120000
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