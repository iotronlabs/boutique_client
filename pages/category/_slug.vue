<template>
  <v-container>
    <v-img height="400px" src="/carousel/dress.jpg"></v-img>
    <br />
    <v-row>
      <v-col cols="12" md="3" lg="3">
        <span class="title">{{category.name }}</span>
        <h1 class="overline accent--text">Sub categories</h1>
        <v-expansion-panels popout class="mt-4" style="border-radius: 0 20px 0 20px">
          <v-expansion-panel v-for="subcategory in category.children" :key="subcategory.id">
            <v-expansion-panel-header class="primary--text">{{subcategory.name}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list dense rounded class="mt-n4 px-0 py-0">
                <v-list-item
                  v-for="subchildren in subcategory.children"
                  :key="subchildren.id"
                  :to="{ name: 'categories-slug', params: { slug: subcategory.slug}}"
                  class="accent--text body-2 mt-n2 py-0"
                >{{subchildren.name}}</v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" md="9" lg="9">
        <h1 class="display-1 accent--text">#featured</h1>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.id"
            class="pa-1"
            cols="6"
            sm="6"
            md="3"
            lg="3"
          >
            <Product :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "@/components/products/Product";

export default {
  data() {
    return {
      category: this.$route.params.category,
      cardTitle: "Casual Wear",
      desp: "70% - 80%",
      products: []
    };
  },
  components: {
    Product
  },
  computed: {
    ...mapGetters({
      categories: "categories"
    })
  },
  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`/products?category=${params.slug}`);
    // this.title = params.slug
    return {
      products: response.data
    };
  }
};
</script>
