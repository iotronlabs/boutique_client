<template>
<v-app>
  <br><br>
  &nbsp; <v-divider></v-divider><br>
  <div class="black--text text-center display-1 font-weight-medium">
     SHOP BY CATEGORY
  </div>

  <br><br><br>
   <v-layout row wrap>
     
      <v-flex xs12 sm12 md3 v-for="n in 4" :key="n">
        <v-container>
          <Card/>
        </v-container>
      </v-flex>
     
    </v-layout>
   <v-divider></v-divider>
 </v-app>
</template>


<script>
import Card from '@/components/card'
export default {
  components:{
    Card
  },
  data(){
    return{
     
    }
  }

}
</script>
<style scoped>

</style>





