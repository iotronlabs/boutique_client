import state from './state'
export default {
	setDrawer ({}, payload) {
		state.drawer = payload
	},
    toggleDrawer({}) {
		state.drawer = !state.drawer
	}
}
