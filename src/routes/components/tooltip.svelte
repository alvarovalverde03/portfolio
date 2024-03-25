<script lang="ts">
    export let text:string;
</script>

<div class="tooltip">
    <slot />
	<div class="top">
        <span>{text}</span>
		<i />
	</div>
</div>

<style>
	.tooltip {
		display: inline-block;
		position: relative;
		text-align: left;
	}

	.tooltip .top {
		min-width: 0;
		top: -15px;
		left: 50%;
		transform: translate(-50%, -100%);
		padding: 0.8rem 1.4rem;
		color: var(--clr-txt);
		background: var(--clr-bg-2);
		font-weight: normal;
		font-size: 1.4rem;
		border-radius: 4px;
		position: absolute;
		z-index: 99999999;
		box-sizing: border-box;
		visibility: hidden;
		opacity: 0;
        transition: opacity 0.2s ease, visibility 0.2s ease;
	}

	.tooltip:hover .top {
		visibility: visible;
		opacity: 1 !important;
	}

	.tooltip .top i {
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -12px;
		width: 24px;
		height: 12px;
		overflow: hidden;
	}

	.tooltip .top i::after {
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background: var(--clr-bg-2);
		box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
	}
</style>
