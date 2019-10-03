<template>
<v-container fluid>
    <v-row >
        <v-col cols = "12" xs = "6" sm = "6"  v-for = "product in products" :key = "product" class = "hidden-md-and-up" >
            <v-card
             class="mx-auto"
            :flat="false"
            :loading="false"
            :outlined="false"
            :elevation="undefined"
            :raised="false"
            :width="undefined"
            :max-height="undefined">
            
                <v-carousel :show-arrows="true"  hide-delimiters  height="250" style="width:100%">
                    <v-carousel-item
                    v-for="(image,i) in images"
                    :key="i"
                    :src="image.src"
                    >
                    </v-carousel-item>
                </v-carousel>
                
        
                <v-card-text>
                    <v-row>
                        <v-col cols = "12" xs = "6" sm = "6">
                            <p class = "font-weight-bold title black--text"> {{product.title}}&emsp;-</p>
                        </v-col>
                        <v-col cols = "12" xs = "6" sm = "6" >
                            <p class = "title"> {{product.subtitle}}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols = "12" xs = "6" sm = "6">
                            <p class = "font-weight-bold title black--text"> Price - {{product.dprice}}&emsp;</p>
                        </v-col>
                        <v-col cols = "12" xs = "6" sm = "6">
                            <p class = "title"> {{product.oprice}}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols = "12" xs = "6" sm = "6" >
                            <p class = "font-weight-bold title black--text">Colors : </p>
                        </v-col>
                        <v-col cols = "12" xs = "6" sm = "6">
                            <v-chip-group
                            multiple
                            column
                            active-class="primary--text"
                            >
                                <v-chip v-for="color in colors" :key="color">
                                    {{ color.data }}
                                </v-chip>
                            </v-chip-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols = "12" xs = "6" sm = "6">
                           <p class = "font-weight-bold title black--text">Size : </p>
                        </v-col>
                        <v-col cols = "12" xs = "6" sm = "6">
                             <v-chip-group
                            multiple
                            column
                            active-class="primary--text"
                            >
                                <v-chip v-for="size in sizes" :key="size">
                                    {{ size.data }}
                                </v-chip>
                        </v-chip-group>
                        </v-col>
                    </v-row>
                    
                </v-card-text>
        
            </v-card>
        </v-col>

        
    </v-row>
    <v-app-bar
    fixed
      app
      light
      bottom
      floating
      class="hidden-md-and-up"
      min-height="30px"
      align-center justify-center>
      <v-row class = "pr-8 pl-n8">
           <v-col >
          </v-col>
          <v-col >
              <v-btn>Add To Bag</v-btn>
          </v-col>
          <v-col >
              
          </v-col>
           <v-col >
               <v-btn> Wishlist</v-btn>
          </v-col>
      </v-row>
    </v-app-bar>
</v-container>
    
</template>

<script>
export default {
    data(){
        return{
            media : 'true',
            images:[
                {
                    src : "dress.webp"
                },
                 {
                    src : "dress.webp"
                },
                
            ],
            products:[
                {
                    title : "Women Navy Blue  Dress",
                    subtitle : "Vero Moda",
                    dprice : "Rs 799",
                    oprice : "Rs 1000 (20% off)",
                   // colors:['tyf' ,'dfghj' ,'dfghj']
                },
                
                
                
            ],
            colors:[
                {
                    data:"blue",
                },
                {
                    data:"green",
                },
                {
                    data:"purple",
                },
            ],

            sizes:[
                {
                    data :"S",
                },
                {
                    data : "M",
                },
                {
                    data : "L",
                },
                {
                    data : "XL",
                },
            ]
        }
    }

}
</script>

<style>

</style>
