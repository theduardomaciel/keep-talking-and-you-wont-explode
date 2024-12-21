<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import { ModeWatcher } from "mode-watcher";

	import IconContext from "phosphor-svelte/lib/IconContext";

	import "../app.css";

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<IconContext
		values={{
			size: "1.5rem",
		}}
	>
		<div class="app">
			<main>
				<ModeWatcher />
				{@render children()}
			</main>
		</div>
	</IconContext>
</ParaglideJS>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 80rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
