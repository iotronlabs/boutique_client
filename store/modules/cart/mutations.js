import state from './state'
export default {
	SET_PRODUCTS({}, payload) {
		state.products = payload
	}
}