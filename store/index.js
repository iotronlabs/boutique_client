import vuex from 'vuex'
import layout from './modules/layout'
import cart from './modules/cart'

const createStore = () => {
	return new vuex.Store({
		namespaced: true,
		modules: {
			layout,cart
		}
	})
}

export default createStore
