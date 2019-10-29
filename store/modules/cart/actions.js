export default {
	async getCart({commit}) {
		let response = await this.$axios.$get('/cart')
		commit('SET_PRODUCTS', response.data.products)
	},
	async addToCart({dispatch},payload) {
		let response = await this.$axios.$post('/cart',{
			product_variation_id : payload.product_variation_id
		})
		dispatch('getCart')
	},
	async destroy({dispatch},id) {
		let response = await this.$axios.$delete(`/cart/${id}`)
		dispatch('getCart')
	},
	async nuxtServerInit ({ commit, dispatch }) {
		if(this.$auth.loggedIn) 
		{
			await dispatch('getCart')
		}
	}
}