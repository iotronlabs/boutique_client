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
        <v-row no-gutters class="d-flex justify-center mt-n2">
          <!--<div class="hidden-sm-and-down navbar-menu" >
				<v-btn
					v-for="(item, i) in items" :key="i"
					:to="item.to"
					router
					exact
					flat
					v-text="item.text" 
					class="navbar-menu-items"	
				>
					{{item.text}}
				</v-btn>
          </div>-->
          <div class="hidden-sm-and-down">
            <v-menu open-on-hover bottom offset-y v-for="(item, i) in items" :key="i">
              <template v-slot:activator="{ on }">
                <v-btn
                  :to="item.to"
                  router
                  exact
                  flat
                  v-text="item.text"
                  v-on="on"
                  rounded
                  outlined
                  color="primary"
                  class="mx-1"
                >{{item.text}}</v-btn>
              </template>
              <!-- <v-list>
						<v-list-item
							v-for="sb in item.sub_items"
							:key="sb"
							
						>
							<v-list-item-title>{{ sb.title }}</v-list-item-title>
							<v-list-item-title>{{ categories.data }}</v-list-item-title>
						</v-list-item>
              </v-list>-->
              <v-list v-for="item in categories.data" :key="item">
                <v-list-item v-if="item.name=='Men'">
                  <v-list-item-title>{{ item}}</v-list-item-title>
                </v-list-item>
              </v-list>
              <v-list v-for="item in categories.data" :key="item">
                <v-list-item v-if="item.name=='Women'">
                  <v-list-item-title>{{ item}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <v-col class="hidden-md-and-up py-0 mt-n3">
            <v-text-field outlined rounded hide-details label="Customise your Style" />
          </v-col>
        </v-row>
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
