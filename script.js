// Exemplo fictício para ilustrar como você poderia usar uma API
async function fetchProductPrice() {
    const response = await fetch('https://api.amazon.com/product?asin=B0CJ428RNT&api_key=YOUR_API_KEY');
    const data = await response.json();
    return data.price;
}

document.addEventListener('DOMContentLoaded', async () => {
    const priceElement = document.getElementById('product-price');
    const price = await fetchProductPrice();
    priceElement.textContent = `Preço: R$${price}`;
});
