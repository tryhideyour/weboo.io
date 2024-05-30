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
        name: 'Sepatu Lari Pria Velocity NITRO 2',
        image: 'Sepatu Lari Pria Velocity NITRO 2 Fade.webp',
        price: 2099000
    },
    {
        id: 2,
        name: 'Sepatu Lari Pria Velocity NITRO 2',
        image: 'Sepatu Lari Pria Velocity NITRO 2.webp',
        price: 1999000
    },
    {
        id: 3,
        name: 'Sepatu Lari Pria Daviate NITRO 2',
        image: 'Sepatu Lari Pria Velocity NITRO 21.webp',
        price: 239000
    },
    {
        id: 4,
        name: 'Sepatu Lari Pria Electrify NITRO 2',
        image: 'Sepatu Lari Pria Electrify NITRO 2.webp',
        price: 2099000
    },
    {
        id: 5,
        name: 'Sepatu Lari Wanita Deviate NITRO 2',
        image: 'Sepatu Lari Wanita Deviate NITRO 2.webp',
        price: 2399000
    },
    {
        id: 6,
        name: 'Sepatu Suede Classic XXI Trainers ',
        image: 'Sepatu Suede Classic XXI Trainers.webp',
        price: 1399000
    },
    {
        id: 7,
        name: 'Sepatu Suede Classic XXI Trainers',
        image: 'Sepatu Suede Classic XXI Trainers1.webp',
        price: 1399000
    },
    {
        id: 8,
        name: 'Sepatu Suede Classic XXI Trainers',
        image: 'Sepatu Suede Classic XXI Trainers2.webp',
        price: 1399000
    },
    {
        id: 9,
        name: 'Sepatu Suede Classic XXI Trainers',
        image: 'Sepatu Suede Classic XXI Trainers3.webp',
        price: 1399000
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