<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-title></v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },

  computed: {
    link() {
      return {
        name: "products-slug",
        params: {
          slug: this.product.slug
        }
      };
    }
  }
};
</script>

<style>
</style>
