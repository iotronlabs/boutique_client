import state from './state'
export default {
	setDrawer ({}, payload) {
		state.drawer = payload
	},
    toggleDrawer({}) {
		state.drawer = !state.drawer
	},
	setNavMenu(state, response) {
		
		state.categories = response.data
		console.log(response.data)
	},	
	
}
