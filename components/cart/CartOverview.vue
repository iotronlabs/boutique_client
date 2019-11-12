<template>
  <v-container>
    <CartOverviewProduct v-for="product in products" :key="product.id" :product="product" />
    <!-- <v-col cols="12" sm="12" md="4">Product image</v-col>
          <v-col cols="12" sm="12" md="4">{{product.name}}</v-col>
          <v-col cols="12" sm="12" md="2">Product Price</v-col>
          <v-col cols="12" sm="12" md="2">
            <v-btn rounded @click.prevent="destroy(product.id)">Remove</v-btn>
    </v-col>-->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CartOverviewProduct from "@/components/cart/CartOverviewProduct";
export default {
  components: {
    CartOverviewProduct
  },

  computed: {
    ...mapGetters({
      products: "cart/products"
    })
  }
};
</script>

<style>
</style>