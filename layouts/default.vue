<template>
	<v-app>
		<Toolbar />
		<Drawer />
	</v-app>
</template>

<script>
import Toolbar from '@/components/core/Toolbar'
import Drawer from '@/components/core/Drawer'
export default {
	components: {
		Toolbar,
		Drawer
	}
}
</script>

<style>

</style>
