const getAllProductsData = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    return data;
}

export { getAllProductsData }