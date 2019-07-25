import vuex from 'vuex'
import layout from './modules/layout'

const createStore = () => {
	return new vuex.Store({
		namespaced: true,
		modules: {
			layout
		}
	})
}

export default createStore
