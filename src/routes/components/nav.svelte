<nav>
    <a href="/projects">
        Projects
    </a>
    <a href="/blog">
        Blog
    </a>
</nav>

<style>
	nav {
		padding-block: 1rem;
        display: flex;
        justify-content: end;
        padding: 3rem 4rem;
        gap: 4rem;
        font-size: 20px;
	}

    nav a:hover {
        color: var(--clr-primary);
    }
    
	@media (max-width: 768px) {
		nav {
			justify-content: space-between;
		}
	}
</style>