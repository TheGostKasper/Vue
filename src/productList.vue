<template>
<div>
 <h2>{{title}}</h2>
    <ul>
        <product-list-item @remove="remove(i)" v-for="(product,i) in products" :product="product" :key="product.id">
        </product-list-item>
    </ul>
</div>
</template>

<script>
import ProductListItem from "./productListItem.vue";
export default {
  name: "product-list",
  props: ["products", "title"],
  components: {
    "product-list-item": ProductListItem
  },
  methods: {
    remove(i) {
      this.products.splice(i, 1);
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 40px;
}
ul {
  list-style-type: none;
}
</style>