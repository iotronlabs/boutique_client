<template>
  <v-card class="mx-auto" height="550">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img height="500" src="/man.jpg"></v-img>
        </v-col>
        <v-col cols="6">
          <p class="font-weight-medium">{{product.name}}</p>
          <v-div>
            <v-rating v-model="rating"></v-rating>
          </v-div>
          <p>{{product.description}}</p>

          <br />
          <v-row>
            <v-col
              cols="12"
              xs="6"
              sm="6"
              md="3"
              lg="3"
              class="font-weight-bold"
            >Price : {{product.price}}</v-col>
            <v-col cols="12" xs="6" sm="6" md="3" lg="3">{{product.oprice}}</v-col>
          </v-row>
          <!-- <v-chip-group
                        multiple
                        column
                        active-class="primary--text"
                        >
                            <v-chip v-for="color in colors" :key="color">
                                {{ color }}
                            </v-chip>
          </v-chip-group>-->
          <ProductVariation
            v-for="(variations, type) in product.variations"
            :type="type"
            :variations="variations"
            :key="type"
          />

          <v-row class="pa-8">
            <v-btn>Add To Bag</v-btn>
            <v-spacer></v-spacer>
            <v-btn>Wishlist</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
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
  }
};
</script>

<style>
</style>
