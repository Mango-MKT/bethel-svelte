<script>
    // Check if in production mode
	const isProduction = process.env.NODE_ENV === 'production';
	let base = "";

	if(isProduction) {
		base = "/bethel-svelte";
	}
</script>
<div class="footer-nav-wrap">
    <div class="footer-nav">
        <a href="{base}/">Home</a>
        <a href="{base}/">Stories</a>
        <a href="{base}/">Creation</a>
    </div>
</div>
<footer>
	<p>A collection of illustrations to use for talks.</p>
</footer>