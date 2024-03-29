export const getProductsByBrand = (products, brands) =>
  products.filter((product) =>
    brands.length > 0 ? brands.includes(product.brand) : products
  );
