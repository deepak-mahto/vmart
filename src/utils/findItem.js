export const getItemById = (products, itemId) =>
  products.some((product) => product._id === itemId);
