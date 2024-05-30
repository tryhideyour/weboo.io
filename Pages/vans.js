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
        name: 'Sepatu Unisex VANS STYLE 36 GUM ASPHALT - VN0A54F61O7',
        image: 'Sepatu Unisex VANS STYLE 36 GUM ASPHALT - VN0A54F61O7.webp',
        price: 899000
    },
    {
        id: 2,
        name: 'Sepatu Pria VANS SK8-HI REISSUE VLY LX NOON GOONS WHITE - VN0A4BVH616',
        image: 'Sepatu Pria VANS SK8-HI REISSUE VLY LX NOON GOONS WHITE - VN0A4BVH616.webp',
        price: 1500000
    },
    {
        id: 3,
        name: 'Sepatu Pria VANS VAULT SK8-HI BARACUTA POCKET - VN0A4UWX25I',
        image: 'Sepatu Pria VANS VAULT SK8-HI BARACUTA POCKET - VN0A4UWX25I.webp',
        price: 1350000
    },
    {
        id: 4,
        name: 'Sepatu Pria VANS OLD SKOOL CHECKER CUBE BLACK - VN0A3WKT3XR',
        image: 'Sepatu Pria VANS OLD SKOOL CHECKER CUBE BLACK - VN0A3WKT3XR.webp',
        price: 929000
    },
    {
        id: 5,
        name: 'Sepatu Pria VANS OLD SKOOL 36 DX ANAHEIM LEATHER BLACK - VN0A54F3103 ',
        image: 'Sepatu Pria VANS OLD SKOOL 36 DX ANAHEIM LEATHER BLACK - VN0A54F3103.webp',
        price: 1050000
    },
    {
        id: 6,
        name: 'Sepatu Pria VANS SK8-HI 38 DX ANAHEIM FACTORY PENDLETON - VN0A38GF9GT ',
        image: 'Sepatu Pria VANS SK8-HI 38 DX ANAHEIM FACTORY PENDLETON - VN0A38GF9GT.webp',
        price: 1350000
    },
    {
        id: 7,
        name: 'Sepatu Pria VANS UA SK8-HI 38 DX SANDY LIANG PATCHWORK - VN0A54FB9ZP',
        image: 'Sepatu Pria VANS UA SK8-HI 38 DX SANDY LIANG PATCHWORK - VN0A54FB9ZP.webp',
        price: 1350000
    },
    {
        id: 8,
        name: 'Sepatu Pria VANS AUTHENTIC DISRUPTIVE MARSHMALLOW - VN0A348A3Z2',
        image: 'Sepatu Pria VANS AUTHENTIC DISRUPTIVE MARSHMALLOW - VN0A348A3Z2.webp',
        price: 850000
    },
    {
        id: 9,
        name: 'Sepatu Pria VANS OLD SKOOL 36 DX ANAHEIM ANIMAL MULTI - VN0A54F396M',
        image: 'Sepatu Pria VANS OLD SKOOL 36 DX ANAHEIM ANIMAL MULTI - VN0A54F396M.webp',
        price: 1100000
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