<script lang="ts">
    import * as config from '$lib/config';
	import Socials from './socials.svelte';
</script>

<section class="presentation">
    <img class="presentation__profile_img" src="/alvaro.jpg" alt="Foto de perfil de Alvaro Valverde">
    <div class="presentation__info">
	    <h1>{config.title}</h1>
        <h2>Software engineering student</h2>
        <Socials />
    </div>
</section>

<style>
    .presentation {
        display: flex;
        flex-direction: row;
        gap: 3rem;

        margin-bottom: 10rem;
        margin-top: 15rem;
    }

    .presentation .presentation__profile_img {
        width: 27rem;
        height: 27rem;
        border-radius: 50%;
    }

    .presentation .presentation__info h1 {
        margin-top: var(--spacing-32);
        margin-bottom: 0;
        font-size: clamp(var(--font-26), 4vw, var(--font-48));
    }

    .presentation .presentation__info h2 {
        opacity: 0.5;
        margin-top: 0;
        margin-bottom: var(--spacing-32);
        text-transform: none;
        font-size: clamp(var(--font-20), 4vw, var(--font-32));
    }
    
	@media (max-width: 768px) {
        .presentation {
            flex-direction: column;
            align-items: center;
            margin-top: 10rem;
            margin-bottom: 8rem;
        }
        .presentation .presentation__info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
		.presentation .presentation__profile_img {
            width: 20rem;
            height: 20rem;
        }
        .presentation .presentation__info h1 {
            margin-top: var(--spacing-16);
        }
        .presentation .presentation__info h2 {
            margin-bottom: var(--spacing-24);
        }
	}
</style>