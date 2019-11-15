<template>
  <v-app class="content">
    <Slider />
    <v-carousel height="400">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            <v-btn outlined color="primary">Explore</v-btn>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-divider class="hidden-md-and-up"></v-divider>
    <br />
    <h1 class="display-1 accent--text">#Featured</h1>

    <v-row no-gutters>
      <v-col cols="6" sm="6" md="3" lg="3" class="pa-1" v-for="n in 4" :key="n">
        <Card />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <br />
    <v-parallax height="300" dark src="parallax/store.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Explore Our Collections</h1>
          <v-btn class="overline" dark outlined>Enter the Store</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <br />
    <h1 class="display-1 accent--text text-right">#New Arrivals</h1>

    <v-row no-gutters>
      <v-col cols="6" sm="6" md="3" lg="3" class="pa-1" v-for="n in 4" :key="n">
        <Card />
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <br />
  </v-app>
</template>


<script>
import Card from "@/components/Card";
import Slider from "@/components/Slider";
export default {
  components: {
    Card,
    Slider
  },
  data() {
    return {
      items: [
        {
          src: "carousel/mane.jpg"
        },
        {
          src: "carousel/dress.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>





