<template>
  <v-app class="mt-n4">
    <v-carousel height="500" class="mt-n12" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-overlay absolute>
          <v-col class="fill-height" align="center" justify="center">
            <p class="display-3 font-weight-thin">Explore Our Collections</p>
            <v-btn outlined color="primary">Dive in</v-btn>
          </v-col>
        </v-overlay>
      </v-carousel-item>
    </v-carousel>

    <Slider class="mx-auto hidden-md-and-up mt-n12" />
    <v-container class="mt-1 px-0">
      <h2 class="accent--text text-center" style="letter-spacing: 5px">#FEATURED</h2>
      <p class="subtitle-1 my-0 mt-n2 text-center">handpicked collections for you</p>
      <v-divider />
      <v-row no-gutters>
        <v-col
          cols="6"
          xs="6"
          sm="3"
          md="3"
          lg="2"
          class="pa-1"
          v-for="product in products"
          :key="product.slug"
        >
          <Product :product="product" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <br />
    <v-parallax height="300" dark src="parallax/store.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Explore Our Collections</h1>
          <v-btn class="overline" dark outlined>Enter the Store</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <br />
    <v-container class="px-0">
      <h2 class="accent--text text-center" style="letter-spacing: 5px">#NEW ARRIVALS</h2>
      <p class="subtitle-1 my-0 mt-n2 text-center">latest trends in season</p>
      <v-divider />
      <v-row no-gutters>
        <v-col
          cols="6"
          xs="6"
          sm="3"
          md="3"
          lg="2"
          class="pa-1"
          v-for="product in products"
          :key="product.slug"
        >
          <Product :product="product" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>

    <br />
  </v-app>
</template>


<script>
import Product from "@/components/products/Product";
import Slider from "@/components/Slider";
export default {
  components: {
    Product,
    Slider
  },
  data() {
    return {
      products: [],
      items: [
        {
          src: "carousel/mane.jpg"
        },
        {
          src: "carousel/dress.jpg"
        }
      ]
    };
  },
  async asyncData({ app }) {
    let response = await app.$axios.$get(`products`);

    return {
      products: response.data
    };
  }
};
</script>
<style scoped>
</style>





