const addItem = () => {
    const nameField =document.getElementById('product-name')
    const nameFieldValue =nameField.value;

    //display in ui
    displayProducts(nameFieldValue);

    //add to local stroage
    addProductToCart(name)


    nameField.value="";
}

const displayProducts = name =>{
    const ul = document.getElementById('products')
     const li =document.createElement('li')
     li.innerHTML = name;
     ul.appendChild(li)
}


const getCart = () =>{
    const cart =localStorage.getItem('cart')
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
    cart[name] =1;
    // console.log(cart);
    const cartStiringfied =JSON.stringify(cart)
    localStorage.setItem('cart', cartStiringfied)
}