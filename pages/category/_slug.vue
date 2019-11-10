<template>
    <v-container>
        <v-img height="400px" src="/carousel/dress.jpg"></v-img>
        <br><br>
       <span class="title">{{category.name }}</span>
        <h1 class="display-1 accent--text">#featured</h1>
        <v-row>
            <v-col cols="3" v-for="n in 3" :key="n">
                <v-card
                class="mx-auto category-card"
                max-height="500"
                outline
                raised
                exact
                :to="{ name: 'categories-slug', params: { slug: category.slug}}"
                >
               
                    <v-img
                    class="mx-auto"
                    max-height="300"
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    ></v-img>

                    <v-card-title>
                    <div>{{cardTitle}}</div> <v-spacer></v-spacer>
                    
                    <span class="grey--text subtitle-1">{{desp}}</span>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-divider vertical></v-divider>
            </v-col>
            <v-col cols="2">
                
               <v-list flat v-for="subcategory in category.children" :key="subcategory">
                    <v-list flat dense height="30px" rounded >
                        <v-list-item :to="{ name: 'categories-slug', params: { slug: category.slug}}">
                            <b>{{subcategory.name}}</b>
                        </v-list-item>
                    </v-list>  
                    <v-list flat dense height="30px" rounded v-for="product in subcategory.children" :key="product">
                        <v-list-item :to="{ name: 'categories-slug', params: { slug: subcategory.slug}}">
                            {{product.name}}
                        </v-list-item>
                    </v-list>     
                </v-list> 
            
            </v-col>
        </v-row>
          
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        category: this.$route.params.category,
        cardTitle:'Casual Wear',
        desp:'70% - 80%',
        

        } 
    },
    computed: {
        ...mapGetters ({
        categories: "layout/categories",
        }), 
    }
    
}
</script>
