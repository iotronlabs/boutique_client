export const state = () => ({
    products: []
})



export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}

export const actions = {
    async getCart({
        commit
    }) {
        let response = await this.$axios.$get('/cart')

        commit('SET_PRODUCTS', response.data.product)


    }
}