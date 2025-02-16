import { defineConfig } from 'vite';
import { resolve } from 'path'; 
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts({rollupTypes: true})],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/enjoyhint.ts'),
            formats: ['es']
        }
    }
});