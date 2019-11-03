import state from './state'
export default {
	setDrawer: (state, payload) => (state.drawer = payload),
	toggleDrawer: state => (state.drawer = !state.drawer),
	setNavMenu(state, categories) {

		state.categories = categories

	},

}