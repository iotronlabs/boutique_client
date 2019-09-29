export default {
	async callUpdateNavMenu({ commit }) {
		console.log('called')

		commit('setNavMenu')
	}
}