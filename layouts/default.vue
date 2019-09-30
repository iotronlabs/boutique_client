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
	mounted() {
		console.log('called')
		this.initialize()
	},
	methods: {
		...mapActions('layout',['callUpdateNavMenu']),
		async initialize() {
		console.log('called')

			await this.callUpdateNavMenu()
		}
	}
}
</script>

<style>

</style>
