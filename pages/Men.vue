<template>
<v-app class="content">

    &emsp;&emsp;
    <v-img  
         width="100vw"
         height="400"
         src="\butiq.jpeg">
    </v-img>
    <v-sheet
      class="mx-auto"
      max-width="1200"
    >
    <br><br>
    <p class="display-2 "><b><u><center>Latest Offers</center></u></b></p>
    <br><br>
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="offer in offers"
          :key="offer"
          v-slot:default="{ active, toggle }"
        >
        
            <v-img
            width = "150"
            height = "150"
            class="mx-4"
            :input-value="active"
            v-bind:src="offer.sr"
            >
            </v-img>
        
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <br><br>
    
        <v-row>
            <p class="display-1">Kurtas</p>
            <v-spacer></v-spacer>
            <v-btn color = "primary"> See More</v-btn>
        </v-row>
        <br>
         <v-sheet
      class="mx-auto"
      max-width="1200"
    >
    
    <br><br>
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="kurta in kurtas"
          :key="kurta"
          v-slot:default="{ active, toggle }"
        >
        
            <v-img
            width = "150"
            height = "150"
            class="mx-4"
            :input-value="active"
            v-bind:src="kurta.sr"
            >
            </v-img>
            
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <br><br>
    <v-row>
            <p class="display-1">Sherwani</p>
            <v-spacer></v-spacer>
            <v-btn color = "primary" > See More</v-btn>
        </v-row>
        <br>
         <v-sheet
      class="mx-auto"
      max-width="1200"
    >
    
    <br><br>
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="sherwani in sherwanis"
          :key="sherwani"
          v-slot:default="{ active, toggle }"
        >
        
            <v-img
            width = "150"
            height = "150"
            class="mx-4"
            :input-value="active"
            v-bind:src="sherwani.sr"
            >
            </v-img>
            
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <br><br>
    
</v-app>
    
</template>

<script>
export default {
    data(){
        return{
            offers:[
                {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
                 {
                    title:'offer',
                    to:'/',
                    sr:'/offer2.webp'
                },
            
            ],
             kurtas:[
                {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 {
                    title:'kurta',
                    to:'/',
                    sr:'/kurta.jpg'
                },
                 
            
            ],
            sherwanis:[
                {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
                 {
                    title:'sherwani',
                    to:'/',
                    sr:'/sherwani.jpg'  
                },
            ]
        }
         
    }
    

}
</script>

<style>

</style>
