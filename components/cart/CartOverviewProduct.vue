<template>
  <v-row>
    <v-col cols="12" sm="12" md="2"></v-col>
    <v-col cols="12" sm="12" md="4">{{product.product.name}} | {{product.name}}</v-col>
    <v-col cols="12" sm="12" md="2">
      Quantity:
      <select>
        <option value="0">0</option>
        <option
          :value="x"
          v-for="x in product.stock_count"
          :key="x"
          :selected="x == product.quantity"
        >{{x}}</option>
      </select>
    </v-col>
    <v-col cols="12" sm="12" md="2">{{product.price}}</v-col>
    <v-col cols="12" sm="12" md="2">
      <v-btn rounded href @click.prevent="destroyProduct(product.id)">Remove</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },

  methods: {
    ...mapActions({
      destroy: "cart/destroy",
      update: "cart/update"
    }),
    destroyProduct(productId) {
      if (confirm("Are you sure?")) {
        this.destroy(productId);
      }
    }
  }
};
</script>