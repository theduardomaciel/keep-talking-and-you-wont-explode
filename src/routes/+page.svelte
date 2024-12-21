<script lang="ts">
	// Assets
	import Bomb from "@/assets/bomb.svg?component";
	import title from "@/assets/title.svg?url";

	// Icons
	import KeyboardIcon from "@/assets/icons/keyboard.svg?component";
	import CirclePlusIcon from "phosphor-svelte/lib/PlusCircle";

	import GithubIcon from "@/assets/icons/github.svg?component";

	// Components
	import RoomCard from "./RoomCard.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<svelte:head>
	<title>Keep Talking and You Won't Explode</title>
	<meta name="description" content="Página inicial de seleção de salas" />
</svelte:head>

<section class="flex flex-col items-center justify-start gap-16 p-14 w-full">
	<header
		class="relative px-16 py-6 rounded-2xl border-2 border-primary border-dashed justify-center items-center gap-2.5"
	>
		<Bomb class="absolute -bottom-8 -left-20" />
		<img src={title} alt="Keep Typing and You Won't Explode" />
		<KeyboardIcon class="absolute top-0 -right-8 rotate-12 w-24 h-24" />
	</header>

	<div class="flex flex-row items-start justify-between w-full gap-9">
		<div
			class="flex flex-col items-center justify-center bg-card rounded-lg flex-1 flex-shrink"
		>
			<div
				class="flex flex-row items-center justify-center gap-6 border-b border-neutral-700 w-full py-4"
			>
				<CirclePlusIcon weight="duotone" />
				<span class="text-2xl text-center font-semibold"
					>Criar Sala</span
				>
			</div>
			<div
				class="flex flex-col items-center justify-start gap-6 w-full p-6"
			>
				<Button class="w-full">Criar</Button>
			</div>
		</div>
		<div
			class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6 flex-[2]"
		>
			{#each { length: 3 } as _, i}
				<RoomCard />
			{/each}
		</div>
	</div>

	<footer
		class="flex flex-row items-center justify-between bg-primary rounded-lg w-full py-4 px-6"
	>
		<p class="text-center text-base font-medium">
			Feito com ❤️ por
			<a
				class="hover:underline"
				href="https://github.com/theduardomaciel"
				target="_blank"
				rel="noopener noreferrer"
			>
				@theduardomaciel
			</a>
		</p>
		<a
			href="https://github.com/theduardomaciel"
			target="_blank"
			rel="noopener noreferrer"
		>
			<GithubIcon />
		</a>
	</footer>
</section>
