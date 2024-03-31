<template>
  <div>
    <div>
      <h3>Название продукта: </h3>
      <p>{{ product.name }}</p>
    </div>
    <div>
      <h3>Цена: </h3>
      <p>{{ formattedPrice }}</p>
    </div>
    <div>
      <h3>В наличии: </h3>
      <p v-if="product.available === true">Available</p>
      <p v-else>Out of stock</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        name: 'Кофеварка ST1',
        available: true,
        price: 99.99

      }
    }
  },
  computed: {
    formattedPrice () {
      return `$${this.product.price}`
    }
  }
}
</script>

<style scoped>
</style>
