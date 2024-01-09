<script>
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<div>{post.categories}</div>
				<div><a href={'illustrations/' + post.slug} class="title">{post.title}</a></div>
				<div class="description">{post.description}</div>
				
			</li>
		{/each}
	</ul>
</section>