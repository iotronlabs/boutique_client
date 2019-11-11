export default {
	async callUpdateNavMenu({
		commit,
		dispatch
	}) {
		console.log('called')
		const response = await this.$axios.$get('/categories')
		commit('setNavMenu', response)

		if (this.$auth.loggedIn) {
			await dispatch('cart/getCart')
		}
	},

}