<template>
  <div>
    <v-app-bar app prominent>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-side-icon  /> -->

      <v-container fluid px-0 py-0 mt-n2>
        <v-row no-gutters>
          <v-col class="d-flex justify-center">
            <v-img
              src="/butiq.png"
              contain
              height="90"
              width="90"
              max-width="90"
              @click="$vuetify.goTo(0)"
            />
          </v-col>
          <v-col class="d-flex align-center">
            <v-text-field
              append-icon="mdi-magnify"
              label="Customise your Style"
              hide-details
              outlined
              rounded
              class="hidden-sm-and-down"
            />
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <span class="hidden-sm-and-down mr-2">
              <Login />
            </span>

            <!-- <v-btn color="primary" dark class="hidden-sm-and-down">Login</v-btn> -->
            <v-btn rounded outlined color="primary">
              Cart
              <v-icon right>mdi-cart</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="hidden-md-and-up py-0 mt-n5">
            <v-text-field outlined rounded hide-details label="Customise your Style" />
          </v-col>
        </v-row>

        <v-sheet class="hidden-sm-and-down">
          <v-row>
            <v-col cols="3"></v-col>
            <v-menu
              open-on-hover
              :close-on-content-click="false"
              class="hidden-sm-and-down"
              bottom
              v-for="n in 3"
              :key="n"
            >
              <template v-slot:activator="{ on }">
                <v-col cols="2">
                  <span v-on="on">{{categories.data[n-1].name}}</span>
                </v-col>
              </template>

              <v-card>
                <v-list-group prepend-icon="account_circle" value="true">
                  <template v-slot:activator>
                    <v-list-item-title>{{categories.data[n-1].name}}</v-list-item-title>
                  </template>

                  <v-list-group
                    no-action
                    sub-group
                    value="true"
                    v-for="children in categories.data[n-1].children"
                    :key="children"
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>{{children.name}}</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item link v-for="subchildren in children.children" :key="subchildren">
                      <v-list-item-title>{{subchildren.name}}</v-list-item-title>
                      <v-list-item-icon>
                        <v-icon></v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-group>
                </v-list-group>
              </v-card>
            </v-menu>
          </v-row>
        </v-sheet>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Login from "@/components/Login";
export default {
  components: {
    Login
  },
  data() {
    return {
      hover: false
    };
  },
  computed: {
    // ...mapGetters({
    // 	categories: 'categories'

    // }),
    ...mapState({
      items: state => state.layout.items,
      categories: state => state.layout.categories
    })
  },

  methods: {
    ...mapMutations("layout", ["toggleDrawer"])
  }
};
</script>
<style scoped>
</style>
