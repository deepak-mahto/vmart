export const getProductsBySize = (products, sizes) =>
  products.filter((product) =>
    sizes.length > 0 ? sizes.includes(product.size) : products
  );
