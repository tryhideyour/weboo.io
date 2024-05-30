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
        name: 'Sepatu Golf Retrocross Spikeless',
        image: 'Sepatu Golf Retrocross Spikeless.webp',
        price: 1850000
    },
    {
        id: 2,
        name: 'Sepatu Adimatic',
        image: 'Sepatu Adimatic3.webp',
        price: 2000000
    },
    {
        id: 3,
        name: 'Sepatu Ultra 4D',
        image: 'Sepatu Ultra 4D.webp',
        price: 4000000
    },
    {
        id: 4,
        name: 'Sepatu Samba Decon',
        image: 'Sepatu Samba Decon.webp',
        price: 3500000
    },
    {
        id: 5,
        name: 'Sepatu Samba ',
        image: 'Sepatu Samba.webp',
        price: 2500000
    },
    {
        id: 6,
        name: 'Sepatu Golf Ultraboost',
        image: 'Sepatu Golf Ultraboost.webp',
        price: 2950000
    },
    {
        id: 7,
        name: 'Sepatu Golf Ultraboost',
        image: 'Sepatu Golf Ultraboost2.webp',
        price: 2950000
    },
    {
        id: 8,
        name: 'Sepatu Adimatic',
        image: 'Sepatu Adimatic.webp',
        price: 2000000
    },
    {
        id: 9,
        name: 'Sepatu Adimatic',
        image: 'Sepatu Adimatic2.webp',
        price: 2000000
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