import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1, name: 'A Fadinha bonita', price: 19.99, qty: 200 },
    { id: 2, name: 'Biblia', price: 29.99, qty: 200 },
    { id: 3, name: 'o hobbit', price: 39.99, qty: 200 },
  ]);

  function removeProduct(id) {
    const index = products.value.findIndex((product) => product.id === id);
    products.value.splice(index, 1);
  }
  return { products, removeProduct };
});