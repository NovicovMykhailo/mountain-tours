import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [
    injectHTML(),
    ViteSvgSpriteWrapper({ icons: 'src/img/*.svg', outputDir: 'src/public' }),
    FullReload(['./src/**/**.html']),
  ],
});
