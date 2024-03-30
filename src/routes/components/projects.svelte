<script lang="ts">
    import NextJSIcon from "$lib/icons/techs/NextJSIcon.svelte"
	import SocketIoIcon from "$lib/icons/techs/SocketIOIcon.svelte"
	import NodeJSIcon from "$lib/icons/techs/NodeJSIcon.svelte"
	import ExpressIcon from "$lib/icons/techs/ExpressIcon.svelte"
    import Tailwind from "$lib/icons/techs/Tailwind.svelte";
	import PrismaIcon from "$lib/icons/techs/PrismaIcon.svelte";
	import PostgreSqlIcon from "$lib/icons/techs/PostgreSQLIcon.svelte";
	import Tooltip from "./tooltip.svelte";

    const projects = [
        {
            title: "Real-Time Chat",
            imageUrl: "/projects/websockets-chat.webp",
            description: "Real-time chat web using Node.js, Express, and Socket.io on the backend, Next.js with Tailwind CSS on the frontend and integrating Prisma ORM with PostgreSQL as database. This project enables instant messaging and supports features such as chat rooms.",
            liveDemoUrl: "https://chat.alvarovalverde.dev",
            codeUrl: "https://github.com/alvarovalverde03/websockets-chat",
            techs: [
                {
                    name: "Node.js",
                    icon: NodeJSIcon
                },
                {
                    name: "Express",
                    icon: ExpressIcon
                },
                {
                    name: "Socket.IO",
                    icon: SocketIoIcon
                },
                {
                    name: "Next.js",
                    icon: NextJSIcon
                },
                {
                    name: "Tailwind CSS",
                    icon: Tailwind
                },
                {
                    name: "Prisma",
                    icon: PrismaIcon
                },
                {
                    name: "PostgreSQL",
                    icon: PostgreSqlIcon
                }
            ],
        },
    ]
</script>

<section class="projects__cont">
    <h2 class="title">Projects</h2>
    <div class="projects">
        {#each projects as p}
            <div class="project">
                <img src={p.imageUrl} alt="Portfolio" class="project__image">
                <div class="project__info">
                    <h3 class="project__title">{p.title}</h3>
                    <div class="project__links">
                        <a href={p.liveDemoUrl} target="_blank" rel="noopener noreferrer" class="project__link">Live demo</a>
                        <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" class="project__link">View code</a>
                    </div>
                    <p class="project__description">
                        {p.description}
                    </p>
                    <div class="project__techs">
                        {#each p.techs as tech}
                            <Tooltip text={tech.name}>
                                <svelte:component this={tech.icon} />
                            </Tooltip>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
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
        padding: var(--spacing-12) var(--spacing-16);
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

    .project__description {
        font-size: var(--font-16);
        line-height: 28px;
        opacity: 0.9;
        text-wrap: pretty;
    }

    .project__techs {
        display: flex;
        gap: var(--spacing-16);
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
            padding: var(--spacing-8) var(--spacing-12);
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