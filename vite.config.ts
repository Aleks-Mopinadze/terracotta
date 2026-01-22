import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from "@tanstack/router-plugin/vite";
import globalData from "@csstools/postcss-global-data"
import postcssPresetEnv from "postcss-preset-env"
import autoprefixer from "autoprefixer"



// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true
      }),
      react()
  ],
    css: {
      postcss: {
          plugins: [
              globalData({
                  files: [
                      'src/shared/styles/breakpoints.css'
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
