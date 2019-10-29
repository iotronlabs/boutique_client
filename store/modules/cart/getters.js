import state from './state'
export default {
	products({}) {
		return state.products
	},
	cartCount({}) {
		return state.products.length
	}
}