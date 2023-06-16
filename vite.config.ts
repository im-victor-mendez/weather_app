/// <reference types="vite-plugin-svgr/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@assets': resolve(__dirname, 'src/assets'),
			'@functions': resolve(__dirname, 'src/functions'),
			'@sass': resolve(__dirname, 'src/sass'),
			'@layouts': resolve(__dirname, 'src/layouts'),
			'@typescript': resolve(__dirname, 'src/typescript'),
			'@store': resolve(__dirname, 'src/store'),
		},
	},
})
