<template>
<div>
  	<v-toolbar app flat class="navbar">
		<v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
    	<!-- <v-toolbar-side-icon  /> -->
		<v-container fluid px-0>
			<v-row no-gutters>
				<v-col class="d-flex justify-center">
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
						label="Customise your Style"
						hide-details
						outlined
						rounded
						class="hidden-sm-and-down"
					/>
				</v-col>
				<v-col class="d-flex justify-center align-center">

			
					<span class="hidden-sm-and-down mr-2"><Login /></span>
			
					<!-- <v-btn color="primary" dark class="hidden-sm-and-down">Login</v-btn> -->
								<v-btn rounded outlined color="primary" >
       Cart<v-icon right>mdi-cart</v-icon>
    </v-btn>
				</v-col>
			</v-row>
			
		</v-container>
  	</v-toolbar>
	<v-toolbar flat>
		<v-row >
			<!--<div class="hidden-sm-and-down navbar-menu" >
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
			</div>-->
			<div class="hidden-sm-and-down navbar-menu" >
				<v-menu open-on-hover top offset-y>
					<template v-slot:activator="{ on }">
					<v-btn
					v-for="(item, i) in items" :key="i"
					:to="item.to"
					router
					exact
					flat
					v-text="item.text" 
					class="navbar-menu-items"	
					v-on="on"
					>
						{{item.text}}
					</v-btn>
					</template>
			
					<v-list>
					<v-list-item
						v-for="sb in items.sub_titles"
						:key="sb"
						
					>
						<v-list-item-title>{{ sb.title }}</v-list-item-title>
					</v-list-item>
					</v-list>
				</v-menu>
   	`		 </div>
			<v-col class="hidden-md-and-up">
				<v-text-field
					append-icon="mdi-magnify"
					outlined
					rounded
					hide-details
					label="Customise your Style"
				/>
			</v-col>
		</v-row>
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

.navbar-menu
{
	margin-left: 30%;
}
.navbar-menu-items
{
	margin: 10px;
}
</style>
