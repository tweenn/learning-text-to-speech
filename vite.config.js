import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
	return {
		port: 4080,
		root: path.resolve(process.cwd(), './app'),
		base: command === 'serve' ? '/' : 'https://tweenn.github.io/learning-text-to-speech/',
		build: {
			minify: 'esbuild',
			outDir: path.resolve(process.cwd(), './dist'),
		}
	}
});
