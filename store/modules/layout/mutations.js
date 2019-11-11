import state from './state'
export default {

	toggleDrawer: state => (state.drawer = !state.drawer),
	setNavMenu(state, categories) {

		state.categories = categories

	},

}