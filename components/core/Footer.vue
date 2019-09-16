<template>
  <v-footer
    class="py-4"
    dark
    height="auto"
  >
    <v-container mx-auto >
      <v-divider vertical light inset></v-divider>
  
      <v-layout >
        <div>
         BUTIQ 
        </div>
        <v-spacer/>
      <div> 
       
       COMPANY<br>

       <a href="#"> About Us</a><br>
       <a href="#">  Contact Us</a><br>
       <a href="#"> Privacy Policy</a><br><br>
       </div>
       <v-spacer/>
        <div>
         <pre>
         ADDRESS:
         5th Floor, A-118,
         Sector-136, Noida
         </pre>
        </div>
       <br>
     
      

      </v-layout>
     
      <v-spacer />
      <v-layout  col wrap>
        <v-flex xs9 sm 6 md4 lg4>
            <base-btn
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
           
            
          >
            <v-icon v-text="item.icon" />
          </base-btn>
        </v-flex>
        <v-spacer />
        <base-btn
          class="mr-0"
          square
          title="Go to top"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          href: '#!',
          icon: 'mdi-twitter'
        },
        {
          href: '#!',
          icon: 'mdi-instagram'
        },
        {
          href: '#!',
          icon: 'mdi-facebook'
        },
        {
          href: '#!',
          icon: 'mdi-google-plus'
        },
       
        {
          href: '#!',
          icon: 'mdi-pinterest'
        }
      ]
    })
  }
</script>
