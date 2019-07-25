<template>
<div>
  	<v-toolbar app flat class="navbar">
		<v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
    	<!-- <v-toolbar-side-icon  /> -->
		<v-container mx-auto py-0 >
			<v-layout row wrap>
				<v-flex md1>
				<v-img
					src="/butiq.png"
					class="mr-4 navbar-logo"
					contain
					height="70"
					width="70"
					max-width="70"
					@click="$vuetify.goTo(0)"
				/>
				</v-flex>
				<v-flex xs0 sm0 md9 class="hidden-sm-and-down">
					<v-text-field
						append-icon="mdi-magnify"
						flat
						hide-details
						solo-inverted
						class="navbar-search"
					/>
				</v-flex>
				<v-flex md2 xs1 sm1>
					<v-btn icon class="navbar-icon-cart" large>cart</v-btn>
					<!-- <v-btn color="primary" dark class="hidden-sm-and-down">Login</v-btn> -->
					<span class="hidden-sm-and-down navbar-login"><Login /></span>
				</v-flex>
			</v-layout>
			
		</v-container>
  	</v-toolbar>
	<v-toolbar flat>
		<v-layout >
			<div class="hidden-sm-and-down navbar-menu" >
				<v-btn
					v-for="(item, i) in items" :key="i"
					:to="item.to"
					router
					exact
					flat
					v-text="item.text" 
					class="navbar-menu-items"	
				>
					{{item.text}}
				</v-btn>
			</div>
			<v-flex xs12 sm12 class="hidden-md-and-up">
				<v-text-field
					append-icon="mdi-magnify"
					flat
					hide-details
					solo-inverted
				/>
			</v-flex>
		</v-layout>
  	</v-toolbar>
</div>
</template>

<script>
import { mapState,mapGetters, mapMutations } from 'vuex'
import Login from '@/components/Login'
export default {
	components: {
		Login
	},
	data() {
		return {

		}
	},
    computed: {
	//   ...mapGetters('layout',['links'])
		...mapState({
			items: state => state.layout.items
		})
    },

    methods: {
      ...mapMutations('layout',['toggleDrawer']),
	}
}
</script>
<style scoped>
.navbar
{
	padding-top: 20px;
}
.navbar-logo
{
	margin-left: 10px;
	margin-top: -5px;
}
.navbar-search 
{
	padding: 0px 10px 10px;
}
.navbar-login
{
	margin-left: 30px;
	display: inline;
}
.navbar-menu
{
	margin-left: 30%;
}
.navbar-menu-items
{
	margin: 10px;
}
</style>
