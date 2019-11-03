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
    <h1 class="display-1">#featured</h1>

    <v-layout row wrap>
      <v-flex xs12 sm12 md3 v-for="n in 4" :key="n">
        <v-container>
          <Card />
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>

    <br />
    <br />
    <br />&nbsp;
    <v-parallax height="300" dark src="parallax/store.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Explore Our Collections</h1>
          <v-btn class="overline" dark outlined>Enter the Store</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <br />
    <div class="black--text text-center display-1 font-weight-medium">New Arrivals</div>

    <br />
    <br />
    <br />
    <v-layout row wrap>
      <v-flex xs12 sm12 md3 v-for="n in 4" :key="n">
        <v-container>
          <Card />
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>

    <br />
    <br />
    <br />&nbsp;
    <v-divider></v-divider>
    <br />
    <div class="black--text text-center display-1 font-weight-medium">Top Products</div>

    <br />
    <br />
    <br />
    <v-layout row wrap>
      <v-flex xs12 sm12 md3 v-for="n in 4" :key="n">
        <v-container>
          <Card />
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <br />
    <br />
    <br />&nbsp;
    <v-divider></v-divider>
    <br />
    <div class="black--text text-center display-1 font-weight-medium">Best offers</div>

    <br />
    <br />
    <br />
    <v-layout row wrap>
      <v-flex xs12 sm12 md3 v-for="n in 4" :key="n">
        <v-container>
          <Card />
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <pre></pre>
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





