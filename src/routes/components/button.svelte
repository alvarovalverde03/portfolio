<script>
    export let text = '';
</script>

<a href="/" target="_blank" class="btn">{text}</a>

<style>
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