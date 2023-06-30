<script lang="ts">
    import * as config from '$lib/config';
</script>

<header>
    <nav>
        <a href="/">
            <h1>{config.title}</h1>
        </a>
    </nav>
</header>

<style>
	nav {
		padding-block: 1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}
	}
</style>