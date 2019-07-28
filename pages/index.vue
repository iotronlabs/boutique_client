<template>
<v-app>
  <br><br>
  &nbsp; <v-divider></v-divider><br>
  <div class="black--text text-center display-1 font-weight-medium">
     SHOP BY CATEGORY
  </div>

  <br><br><br>
   <v-layout row>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
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





