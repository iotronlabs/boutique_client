<template>
	<v-app>
		<Toolbar />
		
		<Drawer />
		<v-content>
     		 <v-container>
       		    <nuxt />
      		 </v-container>
   		</v-content>
		   <Footer />
	</v-app>
</template>

<script>
import Toolbar from '@/components/core/Toolbar'
import Drawer from '@/components/core/Drawer'
import Footer from '@/components/core/Footer'
export default {
	components: {
		Toolbar,
		Drawer,
		Footer
	}
}
</script>

<style>

</style>
