<template>
  <v-sheet elevation="2" max-width="400">
    <v-slide-group>
      <v-row no-gutters class="d-flex justify-center">
        <v-slide-item
          v-for="category in categories"
          :key="category.id"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="mx-1 my-2"
            width="120"
            exact
            raised
            outline
            :to="{ name: 'category-slug', params: { slug: category.slug, category: category} }"
          >
            <v-img
              class="white--text"
              max-height="160"
              src="https://bulma.io/images/placeholders/320x480.png"
            >
              <div class="mt-1 ml-2">{{category.name}}</div>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-row>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      categories: "categories"
    })
  }
};
</script>

<style>
</style>
