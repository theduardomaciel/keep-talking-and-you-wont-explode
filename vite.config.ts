import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltePhosphorOptimize } from "phosphor-svelte/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg'

import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        paraglide({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide"
        }),
        sveltePhosphorOptimize(),
        sveltekit(),
        svg()
    ]
});
