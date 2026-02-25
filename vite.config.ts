import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from "@tanstack/router-plugin/vite";
import globalData from "@csstools/postcss-global-data"
import postcssPresetEnv from "postcss-preset-env"
import autoprefixer from "autoprefixer"
import vitePluginSvgr from "vite-plugin-svgr";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
      alias: {
          '@': path.resolve(__dirname, './src'),
      }
    },
    plugins: [
        vitePluginSvgr(),
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
            routesDirectory: './src/app/routes',
            generatedRouteTree: './src/routeTree.gen.ts'
        }),
        react()
    ],
    css: {
        postcss: {
            plugins: [
                globalData({
                    files: [
                        'src/app/styles/breakpoints.css'
                    ]
                }),
                postcssPresetEnv({
                    stage: 3,
                    features: {
                        'custom-media-queries': true,
                    }
                }),
                autoprefixer()
            ]
        }
    }
})
