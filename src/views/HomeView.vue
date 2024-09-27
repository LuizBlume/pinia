<script setup>
import { useProductStore } from '@/stores/product';
import { useRouter } from 'vue-router';

const productStore = useProductStore()
const router = useRouter();

function visualizar (id) {
  router.push(`/produto/${id}`)
}
</script>

<template>
  <h1>listagem de produto</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>em breve...</td>
      </tr>
    </tbody>  
  </table>
</template>
