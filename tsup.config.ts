import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['source/skye.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  minify: false
})