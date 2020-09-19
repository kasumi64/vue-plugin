<template>
	<div class="manySlot">
		<header>
			<h2>具名插槽header</h2>
			<slot name="header"></slot>
		</header>
		<div class="body">
			<h3>默认插槽</h3>
			<slot :child="todo">{{todo}}</slot>
		</div>
		<footer>
			<h3>具名插槽footer</h3>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
export default {
	props: {
		todo: [Object, Array]
	}
}
</script>

<style scoped lang="scss">
.manySlot{max-width: 600px;}
header, footer, .body{text-align: center;border: 1px dashed #DDD;padding: 20px;}
h2,h3{margin-bottom: 20px;}
.body{margin: 20px 0;}
</style>
