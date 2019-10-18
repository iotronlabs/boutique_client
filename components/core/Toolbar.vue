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

          <!-- nav categories -->
          <v-col class="d-flex align-center hidden-sm-and-down" >
            <v-col v-for="category in categories.data"
              :key="category">
              <v-menu
                open-on-hover
                :close-on-content-click="false"
                class="hidden-sm-and-down"
                bottom
                offset-y="5"
              >
              
                <template v-slot:activator="{ on }"
                >
                  <v-btn text v-on="on">
                    {{category.name}} 
                  </v-btn>
                </template>
                
                <v-card width="600px" height="300px">

                  <v-card-title class="title">
                    {{category.name}}
                  </v-card-title>

                  <v-row class="mx-5">
                    <v-col cols="4" v-for="children in category.children"
                    :key="children">
                    <!-- <v-hover v-slot:default="{ hover }" value="true"> -->
                      <v-row class="my-3">
                        
                      <v-list-item-title class="category-child-men">{{children.name}}</v-list-item-title>
                      
                      
                      </v-row>
                  
                      <v-row v-for="subchildren in children.children"
                        :key="subchildren">
                        <v-list-item-subtitle class="category-sub-child">{{subchildren.name}}</v-list-item-subtitle>
                      </v-row>
                      
                    </v-col>
                    
                  </v-row>


                  
                </v-card>

              </v-menu>



              
            </v-col>
          </v-col>
          <v-col cols="1">
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
          </v-col>
        </v-row>
        <v-row no-gutters class="d-flex justify-center mt-n2">
        
          <!-- <div class="hidden-sm-and-down">
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
          </div> -->

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
  .category-sub-child:hover{
    margin-left: 2px;
    font-weight: bold;
  }
  .category-child-men {
    color: blue;
    font-weight: bold;
  }
  .category-child-women {
    color: red;
    font-weight: bold;
  }
  .category-child-art {
    color: green;
    font-weight: bold;
  }
  
</style>
