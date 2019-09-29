<template>
	<v-navigation-drawer
		v-model="drawer"
		app
		temporary
		class="drawer"
	>

		    <v-list shaped>
				
		<v-list-item>
			
				<!-- <v-btn color="primary" dark>Login</v-btn> -->
				<Login />
			
			
		</v-list-item>
      <v-subheader>Categories</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
	    <v-list-item>
          <v-switch v-model="$vuetify.theme.dark" color="primary" label="Dark"></v-switch>
        </v-list-item>
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
