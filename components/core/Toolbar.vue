<template>
<div>
  	<v-toolbar app flat class="navbar">
    	<v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
		<v-container mx-auto py-0 >
			<v-layout row wrap>
				<v-flex md1>
				<v-img
					src="/v.png"
					class="mr-5"
					contain
					height="48"
					width="48"
					max-width="48"
					@click="$vuetify.goTo(0)"
				/>
				</v-flex>
				<v-flex xs0 sm0 md9 class="hidden-sm-and-down">
					<v-text-field
						append-icon="mdi-magnify"
						flat
						hide-details
						solo-inverted
					/>
				</v-flex>
				<v-flex md2 xs1 sm1>
				<v-btn icon large>cart</v-btn>
				<!-- <v-btn color="primary" dark class="hidden-sm-and-down">Login</v-btn> -->
				<span class="hidden-sm-and-down"><Login /></span>
				</v-flex>
			</v-layout>
			<v-layout >
				<v-flex xs12 sm12 class="hidden-md-and-up">
					<v-text-field
						append-icon="mdi-magnify"
						flat
						hide-details
						solo-inverted
					/>
				</v-flex>
			</v-layout>
		</v-container>
  	</v-toolbar>
	  <v-toolbar flat>
			<template v-slot:extension>
				<div class="hidden-sm-and-down navbar-items" >
					<v-btn
						v-for="(item, i) in items" :key="i"
						:to="item.to"
						router
						exact
						flat
						v-text="item.text" >
						{{item.text}}
					</v-btn>
				</div>
			</template>
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
	padding-top: 10px;
}
.navbar-items
{
	margin-left: 30%;
}
</style>
