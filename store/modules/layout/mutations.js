import state from './state'
export default {
	setDrawer ({}, payload) {
		state.drawer = payload
	},
    toggleDrawer({}) {
		state.drawer = !state.drawer
	},
	async setNavMenu() {
		const response = await this.$axios.get('/categories')
		console.log(response.data)
	}	
}
