<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<h1 class="text-4xl">Home</h1>
		<button @click="checkout">Checkout</button>
	</div>
</template>

<script setup>
const checkout = () => {
	// This is the function that will be called when the button is clicked
	// throw new Error("Checkout is not yet implemented");
	alert("Checkout is not yet implemented");
};
</script>
