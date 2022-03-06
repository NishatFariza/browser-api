const addItem = () => {
    const nameField =document.getElementById('product-name')
    const nameFieldValue =nameField.value;

    //display in ui
    displayProducts(nameFieldValue);

    //add to local stroage
    addProductToCart(nameFieldValue)


    nameField.value="";
}

const displayProducts = productName =>{
    const ul = document.getElementById('products')
     const li =document.createElement('li')
     li.innerHTML = productName;
     ul.appendChild(li)
}


const getCart = () =>{
    const cart =localStorage.getItem('cart')
    console.log(cart);
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj ={}
    }
    return cartObj;
}

const addProductToCart = name =>{
    const cart = getCart();
    cart[name] =5;
    // console.log(cart);
    const cartStiringfied =JSON.stringify(cart)
    localStorage.setItem('cart', cartStiringfied)
}