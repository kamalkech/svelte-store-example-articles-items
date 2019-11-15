<script>
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let article;
	
	function onRemove() {
		dispatch('removeArticle', article);
	}
</script>

<style>
	h2 {
		padding: 0;
		margin: 0 0 10px 0;
	}
	article {
		padding: 10px;
		margin-bottom: 20px;
		border: solid 1px orange;
		width: 50%;
		position: relative;
	}
	button {
		position: absolute;
		right: 10px;
		bottom: 0px;
		font-size: 12px;
	}
</style>

<article>
	<h2>{article.title}</h2>
	<em>{article.author}</em>
	<button on:click={onRemove}>Remove</button>
</article>