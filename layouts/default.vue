<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-side-icon  /> -->

      <v-container fluid px-0>
        <v-row no-gutters>
          <v-col class="d-flex align-center">
            <nuxt-link :to="{ name: 'index'}">
              <v-img src="/butiq.png" contain height="90" width="90" max-width="90" />
            </nuxt-link>
            <!-- nav categories -->
            <v-col class="hidden-sm-and-down">
              <v-col class="d-flex align-center">
                <v-col v-for="category in categories.data" :key="category.slug">
                  <v-menu
                    open-on-hover
                    :close-on-content-click="false"
                    class="hidden-sm-and-down"
                    bottom
                    offset-y="5"
                  >
                    <template v-slot:activator="{ on }">
                      <!--slug in name:'category-slug' is taking the value of slug defined in "params: { slug: category.slug, name: category}" -->
                      <v-btn
                        :to="{ name: 'category-slug', params: { slug: category.slug, category: category} }"
                        text
                        rounded
                        v-on="on"
                        color="accent"
                      >{{category.name}}</v-btn>
                    </template>

                    <v-card width="600px" height="300px">
                      <v-row class="mx-2">
                        <v-col cols="4" v-for="children in category.children" :key="children">
                          <v-row>
                            <v-list flat dense height="30px" rounded>
                              <v-list-item
                                :to="{ name: 'categories-slug', params: { slug: children.slug} }"
                              >
                                <v-list-item-title class="primary--text overline">{{children.name}}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-row>

                          <v-row v-for="subchildren in children.children" :key="subchildren">
                            <v-list flat dense height="30px" rounded>
                              <v-list-item
                                :to="{ name: 'categories-slug', params: { slug: subchildren.slug}}"
                              >
                                <v-list-item-subtitle class="overline">{{subchildren.name}}</v-list-item-subtitle>
                              </v-list-item>
                            </v-list>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-menu>
                </v-col>
              </v-col>
            </v-col>
          </v-col>

          <v-col class="d-flex justify-end align-center">
            <v-col class="hidden-sm-and-down mx-2">
              <v-text-field
                append-icon="mdi-magnify"
                label="Customise your Style"
                hide-details
                outlined
                rounded
                dense
              />
            </v-col>
            <span class="hidden-sm-and-down mx-2" v-if="$auth.loggedIn==false">
              <Login />
            </span>
            <v-btn class="hidden-md-and-up mr-2" small outlined fab color="primary">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <!-- Account button -->
            <div v-if="$auth.loggedIn" class="hidden-sm-and-down mr-2">
              <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on" icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </template>
                <ProfileList />
              </v-menu>
            </div>

            <!-- Cart button -->
            <div v-if="$auth.loggedIn==true">
              <v-badge overlap>
                <span slot="badge">{{ cartCount }}</span>
                <v-btn :to="{ name: 'cart'}" rounded outlined color="primary">
                  Cart
                  <v-icon right>mdi-cart</v-icon>
                </v-btn>
              </v-badge>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <!--navdrawer-->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list shaped>
        <v-list-item>
          <!-- <v-btn color="primary" dark>Login</v-btn> -->
          <div>
            <Login v-if="$auth.loggedIn==false" />
            <v-list-item-title v-if="$auth.loggedIn==true">Welcome, {{user.name}}</v-list-item-title>
          </div>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-subheader>Categories</v-subheader>
      </v-list>

      <v-list avatar shaped>
        <v-list-group v-for="item in categories.data" :key="item">
          <template v-slot:activator>
            <v-list-item-avatar>
              <v-img src="/icon.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </template>

          <v-list-group no-action sub-group v-for="children in item.children" :key="children">
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
        <v-divider />
        <div v-if="$auth.loggedIn==true">
          <ProfileList />
        </div>
        <v-list-item>
          <v-switch v-model="$vuetify.theme.dark" color="primary" label="Dark"></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Login from "@/components/Login";
import ProfileList from "@/components/profile/ProfileList";
import Footer from "@/components/core/Footer";
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
  components: {
    Login,
    ProfileList,
    Footer
  },

  data() {
    return {
      drawer: null,
      avatar: "/butiq.png"
    };
  },
  mounted() {
    this.initialize();
  },
  computed: {
    ...mapGetters({
      categories: "categories",
      cartProducts: "cart/products",
      cartCount: "cart/cartCount"
      // authenticated: "user/getAuthentication"
    }),
    ...mapState({
      user: state => state.auth.user
    })
  },

  methods: {
    ...mapActions(["callUpdateNavMenu"]),
    async initialize() {
      await this.callUpdateNavMenu();
    }
  }
};
</script>

<style>
</style>
