<template>
<v-app class="content">

  <Slider/>
  
	 <v-divider class="hidden-md-and-up"></v-divider><br>
	<div class="black--text text-center display-1 font-weight-medium">
		Shop By Category
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

   <br><br><br>
  &nbsp; <v-divider></v-divider><br>
  <div class="black--text text-center display-1 font-weight-medium">
     New Arrivals
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

     <br><br><br>
  &nbsp; <v-divider></v-divider><br>
  <div class="black--text text-center display-1 font-weight-medium">
     Top Products
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
       <br><br><br>
  &nbsp; <v-divider></v-divider><br>
  <div class="black--text text-center display-1 font-weight-medium">
    Best offers
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
   <pre>



   </pre>
 </v-app>
</template>


<script>
import Card from '@/components/card'
import Slider from '@/components/Slider'
export default {
  components:{
    Card,Slider
  },
  data(){
    return{
     
    }
  }

}
</script>
<style scoped>

</style>





