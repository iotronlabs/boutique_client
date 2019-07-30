<template>
  <div>
    <v-sheet
      class="mx-auto"
      elevation="2"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
       >
        <v-slide-item
          v-for="item in items"
          :key="item"
          v-slot:default="{ active, toggle }"
        >
          <v-card
           class="ma-4 "
            width="100"
            exact
            v-bind:to="item.to"
            raised
            outline
          >
         <v-img
          class="white--text hidden-md-and-up"
          max-width="200"
          max-height="300"
          v-bind:src="item.sr"
          >
         <div class="align-end">{{item.title}}</div> 
         </v-img>
          <v-img
          class="white--text hidden-sm-and-down"
          max-height="400"
          max-width="300"
          v-bind:src="item.sr"
          >
         <div class="align-center fill-height">{{item.title}}</div> 
        
         </v-img>
         </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                    title:'Men',
                    to:'/',
                    sr:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                },
                 {
                    title:'Women',
                    to:'/inspire',
                    sr:'https://cdn.vuetifyjs.com/images/cards/store.jpg'
                },
                 {
                    title:'Accessories',
                    to:'/',
                    sr:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                   
                },
                 {
                    title:'Art and Craft',
                    to:'/',
                    sr:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                },
                
            ],
            model:null
        }
    }

}
</script>

<style>

</style>
