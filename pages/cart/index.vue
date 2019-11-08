<template>
	<v-container>
		Your Cart
		<v-card v-for="product in cartProducts" :key="product.id" outlined rounded>
			<v-card-text>
				<CartProduct :product="product" />
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CartProduct from '@/components/cart/CartProduct'
export default {
	middleware: ['auth'],
	components: {
		CartProduct
	},
	created() {
		if(this.$auth.loggedIn==false)
		{
			this.$router.push('/');
		}
	},
	computed: {
		...mapGetters({
			cartProducts: "cart/products"
		})
	}
}
</script>

<style>

</style>