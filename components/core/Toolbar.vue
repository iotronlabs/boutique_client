<template>
<div class="nav">
  	<v-toolbar app flat class="navbar">
		<v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
    	<!-- <v-toolbar-side-icon  /> -->
		<v-container fluid>
			<v-row no-gutters>
				<v-col>
				<v-img
					src="/butiq.png"
					contain
					height="90"
					width="90"
					max-width="90"
					@click="$vuetify.goTo(0)"
				/>
				</v-col>
				<v-col class="d-flex align-center">
					<v-text-field
						append-icon="mdi-magnify"
						text
						hide-details
						solo-inverted
						class="hidden-sm-and-down"
					/>
				</v-col>
				<v-col class="d-flex flex-row-reverse align-center">
					<v-btn icon class="navbar-icon-cart" large>cart</v-btn>
					<!-- <v-btn color="primary" dark class="hidden-sm-and-down">Login</v-btn> -->
					<span class="hidden-sm-and-down navbar-login"><Login /></span>
				</v-col>
			</v-row>
			
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
			<v-flex xs10 sm10 offset-xs1 class="hidden-md-and-up">
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
.nav
{
	position: fixed;
	z-index: 300;
	width: 100%;
}
.navbar
{
	padding-top: 20px;
}
.navbar-logo
{
	margin-left: 50px;
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
