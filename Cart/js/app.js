for (let product of products) {
  let card = `
    <div class="card">
        <div class="image-container">
            <img src="${product.image}" /> 
        </div> 
        <div class="container">
            <div class="info">
            <h5>${product.title}</h5> 
            <h6>${product.price} VNĐ</h6>
            </div>
            <button onclick="addProducts(${product.id})">Add to cart</button>
        </div>
    </div>
    `;
  
    document.getElementById("products").innerHTML += card;
}

const addProducts = (productId) => {
  if (!localStorage.getItem("currentUser")) {
    alert("Please log in");
  } else {
    addToCart(productId);
  }
};

const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
};