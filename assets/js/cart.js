const product={
    id: 1,
    name: "Green Lantern",
    price: 100,
    img: "./assets/img/p1.jpg"
}
window.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("p-name").innerText=product.name;
    document.getElementById("p-price").innerText="Price: "+product.price;
    document.getElementById("s-name").innerText=offer_product.name;
    document.getElementById("s-price").innerText="Price: "+offer_product.price;
    document.getElementById("p-name").innerText=product.name;
    document.getElementById("offer").innerText=offer_product.price+product.price-100;
    document.getElementById("original").innerText=product.price;
    
})
function submit(){
    window.location.href="final.html"
}