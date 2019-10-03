<template>
<v-container fluid>
    <v-row align-center justify-center v-for="product in products" :key="product" class = "hidden-sm-and-down">
        <v-col cols = "12" md = "1" lg = "1"></v-col>
        <v-col cols = "12" xs = "12" sm = "12" md = "10" lg = "10">
            <v-card
            class="mx-auto"
            height = "550"
            >
                <v-row
                class="py-4 pl-4"
                >
                    <v-col class="shrink" cols = "12" xs = "6" sm = "6" md = "6" lg = "6">
                        <v-img
                            height="500"
                            :src="product.src"
                        ></v-img>
                    </v-col>
                    <v-col cols = "12" xs = "6" sm = "6" md = "6" lg = "6">
                       <p class = "font-weight-bold display-1"> {{product.title}}</p>
                       <p>{{product.subtitle}}</p>
                        <v-div>
                             <v-rating v-model="rating"></v-rating> 
                        </v-div>
                        <br>
                        <v-row>
                        <v-col cols = "12" xs = "6" sm= "6" md = "3" lg= "3" class="font-weight-bold">Price : {{product.dprice}} 

                        </v-col>
                         <v-col cols = "12" xs = "6" sm= "6" md = "3" lg = "3" > {{product.oprice}} 

                        </v-col>
                        
                        </v-row>
                       <!-- <v-chip-group
                        multiple
                        column
                        active-class="primary--text"
                        >
                            <v-chip v-for="color in colors" :key="color">
                                {{ color }}
                            </v-chip>
                        </v-chip-group>-->

                        <p class="font-weight-bold">Colors : </p>
                       <!-- <v-div v-for = "color in colors" :key = "color">

                                <v-chip>{{color.data}}</v-chip>&emsp;
                            </v-div>-->
                            <v-chip-group
                            multiple
                            column
                            active-class="primary--text"
                            >
                                <v-chip v-for="color in product.colors" :key="color">
                                    {{ color }}
                                </v-chip>
                            </v-chip-group>
                        
                         <p class="font-weight-bold">Size : </p>
                       <!-- <v-div v-for = "size in sizes" :key = "size">
                           <v-chip>{{size.data}}</v-chip>&emsp;
                            
                        </v-div>-->
                        <v-chip-group
                        multiple
                        column
                        active-class="primary--text"
                        >
                            <v-chip v-for="size in sizes" :key="size">
                                {{ size.data }}
                            </v-chip>
                        </v-chip-group>
                        
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
                    src : "/dress.webp",
                    title : "Women Navy Blue  Dress",
                    subtitle : "Vero Moda",
                    dprice : "Rs 799",
                    oprice : "Rs 1000 (20% off)",
                   colors:['tyf' ,'dfghj' ,'dfghj']
                },
                {
                    src : "/dress.webp",
                    title : "Women Navy Blue  Dress",
                    subtitle : "Vero Moda",
                    dprice : "Rs 799",
                    oprice : "Rs 1000 (20% off)",
                   colors:['tyf' ,'dfghj' ,'dfghj']
                },
                
                
                
            ]
            // rating : "4",

            // colors:[
            //     {
            //         data:"blue",
            //     },
            //     {
            //         data:"green",
            //     },
            //     {
            //         data:"purple",
            //     },
            // ],

            // sizes:[
            //     {
            //         data :"S",
            //     },
            //     {
            //         data : "M",
            //     },
            //     {
            //         data : "L",
            //     },
            //     {
            //         data : "XL",
            //     },
            // ]
        }
    }

}
</script>

<style>

</style>
