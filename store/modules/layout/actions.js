export default {
	async callUpdateNavMenu({ commit }) {
		console.log('called')
		const response = await this.$axios.get('/categories')
		commit('setNavMenu',response)
	},
	
}
