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

          <p class="font-weight-bold">Colors :</p>
          <!-- <v-div v-for = "color in colors" :key = "color">

                                <v-chip>{{color.data}}</v-chip>&emsp;
          </v-div>-->
          <v-chip-group
            v-model="selection"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip v-for="size in sizes" :key="size" :value="size">{{ size }}</v-chip>
          </v-chip-group>
          <v-chip-group multiple column active-class="primary--text">
            <v-chip v-for="color in product.colors" :key="color">{{ color }}</v-chip>
          </v-chip-group>

          <p class="font-weight-bold">Size :</p>
          <!-- <v-div v-for = "size in sizes" :key = "size">
                           <v-chip>{{size.data}}</v-chip>&emsp;
                            
          </v-div>-->
          <v-chip-group multiple column active-class="primary--text">
            <v-chip v-for="size in product.sizes" :key="size">{{ size}}</v-chip>
          </v-chip-group>

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
export default {
  data() {
    return {
      product: null
    };
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
