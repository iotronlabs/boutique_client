<template>
  <v-container class="px-0 py-0">
    <v-img height="400px" src="/carousel/dress.jpg"></v-img>
    <br />
    <v-row>
      <v-col cols="12" md="2" lg="2">
        <span class="title">{{category.name }}</span>
        <h1 class="overline accent--text">Sub categories</h1>
        <v-expansion-panels inset class="mt-4">
          <v-expansion-panel v-for="subcategory in category.children" :key="subcategory">
            <v-expansion-panel-header class="primary--text">{{subcategory.name}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list dense rounded class="mt-n4 px-0 py-0">
                <v-list-item
                  v-for="subchildren in subcategory.children"
                  :key="subchildren"
                  :to="{ name: 'categories-slug', params: { slug: subcategory.slug}}"
                  class="accent--text body-2 mt-n2 py-0"
                >{{subchildren.name}}</v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" md="10" lg="10">
        <h1 class="display-1 accent--text">#featured</h1>
        <v-row>
          <v-col v-for="n in 4" :key="n" class="pa-1" cols="6" sm="6" md="3" lg="3">
            <v-card
              class="mx-auto category-card"
              max-height="500"
              outline
              raised
              exact
              :to="{ name: 'categories-slug', params: { slug: category.slug}}"
            >
              <v-img
                class="mx-auto"
                max-height="300"
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              ></v-img>

              <v-card-title>
                <div>{{cardTitle}}</div>
                <v-spacer></v-spacer>

                <span class="grey--text subtitle-1">{{desp}}</span>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      category: this.$route.params.category,
      cardTitle: "Casual Wear",
      desp: "70% - 80%"
    };
  },
  computed: {
    ...mapGetters({
      categories: "layout/categories"
    })
  }
};
</script>
