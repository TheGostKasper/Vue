<template>
    <div>
        <img :src="product.image">
        <p><strong>{{product.name}}</strong></p>
        <p>{{product.description}}</p>
        <p>Price :{{product.price}} </p>
        <div>
            <button>Add to cart</button>
        </div>
        <router-link to="/products">Back to all items</router-link>
    </div>
</template>

<script>

export default{
    name:'product',
    data(){
        return{
            product:{}
        }
    },
    created(){
        $.getJSON(`https://hplussport.com/api/products/id/${this.$route.params.id}`)
        .done(res => {
           
            this.product = res[0];
    });
    }
}
</script>

<style scoped>
img {
  width: 700px;
  height: 700px;
}
</style>