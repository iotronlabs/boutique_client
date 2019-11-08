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
import { mapActions, mapMutations } from 'vuex'
export default {
	components: {
		Toolbar,
		Drawer,
		Footer
	},
	data() {
		return {
			
		}
	},
	mounted() {
		this.initialize()
	},
	methods: {
		...mapActions('layout',['callUpdateNavMenu']),
		async initialize() {
			
			await this.callUpdateNavMenu()
		}
	}
}
</script>

<style>

</style>
