import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";

/* export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
}); */
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/foobar.css',
            ],
                
                
                
// Here is the rest of my file (if it can help)                

            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        watch: {
          usePolling: true,
        }
    },
});
