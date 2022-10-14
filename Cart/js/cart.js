var modal = document.getElementById("cart")

function openCart() {
    document.getElementById("cart").style.width = '100%';
}

function closeCart() {
    document.getElementById("cart").style.width = '0%';
}

if (!localStorage.getItem('currentUser')) {
    location.href = './login.html'
}

const addToCart = (productId) => {

    const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
  
    const existingItem = cart.find((item) => item.id === productId);
  
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...products.find((product) => product.id === productId),
            quantity: 1,
        });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount();
    location.reload();
};
  
const removeFromCart = (productId) => {
    let cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    
    let existingItem = cart.find((item) => item.id === productId);
  
    if (existingItem) {
        if (existingItem.quantity === 1) {
            cart = cart.filter((item) => item.id !== existingItem.id);
        } else {
            existingItem.quantity--;
        }
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount();
};

const yourCart = () => {

    const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

    if (cart.length === 0) {
        document.getElementById('cart-container').innerHTML = `
            <div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><p style="text-align: center; font-size: 17px;"> Your cart is empty</p><br><br><br><br><br><br><br><br><br><br>
            </div>
        `;
    } else {
        document.getElementById('cart-container').innerHTML = `
            <table>
                <tr>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                ${cart.map((product) => `
                        <tr>
                            <td>
                                <div class="product_info">
                                    <img src=${product.image} alt="">    
                                    <p> ${product.title} </p>
                                </div>

                            </td>
                            <td class="quantity_info">
                                <button onclick="removeFromCart(${product.id});yourCart()">-</button>
                                <span class="quantity_info">${product.quantity}</span>
                                <button onclick="addToCart(${product.id});yourCart()">+</button>    
                            </td>
                            <td>
                                ${product.price * product.quantity} VNĐ
                            </td>
                        </tr>
                    `
                ).join("")
                }
            </table>
            <br>
            <div class="total">
                <p>Total: ${
                    cart.reduce((total, product) => {
                        total += product.price * product.quantity;
                        return total;
                    }, 0)}
                VNĐ </p>
            </div>
        `;
    }

    

};

yourCart();