<script>
    import NextJSIcon from "$lib/icons/techs/NextJSIcon.svelte"
	import SocketIoIcon from "$lib/icons/techs/SocketIOIcon.svelte"
	import NodeJSIcon from "$lib/icons/techs/NodeJSIcon.svelte"
	import ExpressIcon from "$lib/icons/techs/ExpressIcon.svelte"
    import Tailwind from "$lib/icons/techs/Tailwind.svelte";
</script>

<section class="projects__cont">
    <h2 class="title">Projects</h2>
    <div class="projects">
        <div class="project">
            <img src="/projects/websockets-chat.png" alt="Portfolio" class="project__image">
            <div class="project__info">
                <h3 class="project__title">Real-Time Chat</h3>
                <div class="project__links">
                    <a href="https://chat.alvarovalverde.dev" target="_blank" class="project__link">Live demo</a>
                    <a href="https://github.com/alvarovalverde03/chat" target="_blank" class="project__link">View code</a>
                </div>
                <p class="project__description">
                    Real-time chat web using Node.js, Express, and Socket.io on the backend, and Next.js with Tailwind CSS on the frontend. This project enables instant messaging and supports features like chat rooms.
                    <!-- future -> supports also user authentication, and message history -->
                </p>
                <div class="project__techs">
                    <NodeJSIcon />
                    <ExpressIcon />
                    <SocketIoIcon />
                    <NextJSIcon />
                    <Tailwind />
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        padding: 4rem 0;
    }

    .title {
        margin-bottom: var(--spacing-16);
    }

    .projects {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-16);
    }

    .project {
        padding: var(--spacing-16) var(--spacing-24);
        background: transparent;
        border: 2px solid var(--clr-bg-3);
        border-radius: var(--rounded-4);

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-16);
    }

    .project__title {
        font-size: var(--font-20);
        font-weight: 500;
        margin-bottom: var(--spacing-8);
    }

    .project__links {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-24);
    }

    .project__link {
        color: var(--clr-txt);
        opacity: 0.5;
        font-size: var(--font-16);
        font-weight: 500;
        transition: all 0.2s ease;
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 1.5px;
    }

    .project__link:hover {
        opacity: 0.3;
    }

    .project__image {
        max-width: 45%;
        border-radius: var(--rounded-4);
    }

    .project__info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .project__techs {
        display: flex;
        gap: var(--spacing-16);
        opacity: 0.5;
        margin-top: var(--spacing-8);
    }

    @media (max-width: 1000px) {
        section {
            padding: 4rem 2rem;
        }
    }

    
	@media (max-width: 768px) {
        .project {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: var(--spacing-16);
            padding: var(--spacing-8) var(--spacing-16);
        }

        .project__info {
            padding: 1.2rem 1.2rem 0 1.2rem
        }

        .project__image {
            max-width: 100%;
            width: 100%;
        }
    }
</style>