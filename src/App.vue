<template lang="">
	<div>
		<h2>Welcome {{ data.name }}</h2>
	</div>
	<router-view />
</template>
<script>
export default {
	name: 'App',
	data() {
		return {
			data: {
				name: 'Sheikh Rashed',
			},
		};
	},
};
</script>
<style lang=""></style>
