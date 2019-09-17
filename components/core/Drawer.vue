<template>
	<v-navigation-drawer
		v-model="drawer"
		app
		temporary
		class="drawer"
	>
		<v-list>
			<center>
				<!-- <v-btn color="primary" dark>Login</v-btn> -->
				<Login />
			</center>
			<hr>
			<v-list
				v-for="(item, i) in items"
				:key="i"
				:to="item.to"
				:href="item.href"
				@click="onClick($event, item)"
			>
				<v-list-title v-text="item.text" />
			</v-list>
		</v-list>
  	</v-navigation-drawer>
</template>

<script>
  // Utilities
import { mapState, mapMutations} from 'vuex'
import Login from '@/components/Login'
export default {
    name: 'Drawer',
	components: {
		Login
	},
    computed: {
		...mapState({
			drawer: state => state.layout.drawer,
			items: state => state.layout.items
		}),
		dummy() {}
    },
	mounted() {
	},
    methods: {
      ...mapMutations('layout',['setDrawer','toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      }
    }
  }
</script>

<style scoped>
.drawer
{
	z-index: 300;
}
</style>
