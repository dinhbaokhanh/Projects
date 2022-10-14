if (localStorage.getItem('currentUser')) {
    console.log('currentUser');
    document.querySelector('.exit').innerHTML += `
        <a onclick='openCart()'>
            <i class="fa-solid fa-shopping-cart"></i>
            <span id="cart-count"></span>
        </a>
        <a onclick='logout()' href='javascript:;'>
            <i class="fa-solid fa-right-from-bracket"></i>
        </a>
    `;
} else {
    document.querySelector('.exit').innerHTML += `
        <a href="./login.html">
            <i class="fa-solid fa-right-to-bracket"></i>
        </a>
    `;
}

const cartCount = () => {
    if (localStorage.getItem("cart")) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        document.getElementById("cart-count").innerHTML = cart.length;
    }
};

cartCount();