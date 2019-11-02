<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-img height="500" src="/man.jpg"></v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <p class="title">{{product.name}}</p>
          <v-divider class="mt-n3 mb-1"></v-divider>
          <p class="headline">{{product.price}}</p>

          <p>{{product.description}}</p>

          <ProductVariation
            v-for="(variations, type) in product.variations"
            :type="type"
            :variations="variations"
            :key="type"
          />

          <v-row class="pa-8">
            <v-btn @click.prevent="addToCart(product)">Add To Cart</v-btn>
            <v-spacer></v-spacer>
            <v-btn>Wishlist</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import ProductVariation from "@/components/products/ProductVariation";

export default {
  data() {
    return {
      product: null
    };
  },
  components: {
    ProductVariation
  },
  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products/${params.slug}`);

    return {
      product: response.data
    };
  },
  methods: {
    ...mapActions("cart", ["addToCart"])
  }
};
</script>

<style>
</style>
