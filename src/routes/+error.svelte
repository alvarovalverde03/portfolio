<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="error-wrapper">
    <div class="error">
        <h1>{$page.status}</h1>
        <p>{$page.error?.message}</p>
        
    	<a href="/" class="btn">Go home</a>
    </div>
</div>

<style>
    .error-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .error {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    h1 {
        font-size: 5rem;
        font-weight: 700;
    }

    p {
        font-size: 1.8rem;
        font-weight: 400;
        margin-block-start: -10px;
    }

    .btn {
        background: var(--clr-bg);
        color: var(--clr-txt);
        padding: var(--spacing-16) var(--spacing-32);
        margin: 0.5em 0 1em 0;
        font-size: var(--font-24);
        font-weight: 500;
        border: 2px solid var(--clr-txt);

        box-shadow: -6px 6px 0 0 var(--clr-txt);
        transition: 0.1s ease-in-out;
    }

    .btn:hover {
        box-shadow: 2px -2px 0 0 var(--clr-txt);
    }
</style>