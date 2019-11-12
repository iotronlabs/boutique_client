<template>
  <v-container>
    Your Cart
    <v-card>
      <CartOverview />
      <v-btn block color="primary">CheckOut</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CartOverview from "@/components/cart/CartOverview";
export default {
  middleware: ["auth"],
  components: {
    CartOverview
  },
  created() {
    if (this.$auth.loggedIn == false) {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters({
      cartProducts: "cart/products"
    })
  }
};
</script>

<style>
</style>