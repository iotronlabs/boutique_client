<template>
<v-container fluid>
    <v-row align-center justify-center v-for = "product in products" :key = "product">
        <v-col cols = "12" md = "1"></v-col>
        <v-col cols = "12" xs = "12" sm = "12" md = "10">
            <v-card
            class="mx-auto"
            height = "500"
            >
                <v-row
                class="py-4 pl-4"
                >
                    <v-col class="shrink" cols = "12" xs = "6" sm = "6" md = "6">
                        <v-img
                            height="450"
                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                        ></v-img>
                    </v-col>
                    <v-col cols = "12" xs = "6" sm = "6" md = "6">
                       <p class = "font-weight-bold display-1"> {{product.title}}</p>
                       <p>{{product.subtitle}}</p>
                        <v-div>
                             <v-rating v-model="rating"></v-rating> 
                        </v-div>
                        <br>
                        <v-row>
                        <v-col cols = "12" xs = "6" sm= "6" md = "3" class="font-weight-bold">Price : {{product.dprice}} 

                        </v-col>
                         <v-col cols = "12" xs = "6" sm= "6" md = "3" > {{product.oprice}} 

                        </v-col>
                        
                        </v-row>
                        <v-div>
                            <p class="font-weight-bold">Colors : </p>
                            <v-chip>green</v-chip>
                            <v-chip>red</v-chip>
                            <v-chip>yellow</v-chip>
                        </v-div>
                        
                        <v-div>
                            <p class="font-weight-bold">Size : </p>
                            <v-chip>S</v-chip>
                            <v-chip>M</v-chip>
                            <v-chip>L</v-chip>
                        </v-div>
                        
                        <v-row class = "pa-8">
                        <v-btn>Add To Bag</v-btn><v-spacer></v-spacer>
                        <v-btn> Wishlist</v-btn>
                        </v-row>

                    </v-col>
        
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
    
</template>

<script>
export default {
    data(){
        return{
            products:[
                {
                    title : "Women Navy Blue  Dress",
                    subtitle : "Vero Moda",
                    dprice : "Rs 799",
                    oprice : "Rs 1000 (20% off)",
                },
            ],
            rating : "4",
        }
    }

}
</script>

<style>

</style>
