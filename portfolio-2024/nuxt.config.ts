import regexpPlugin from 'rollup-plugin-regexp'
import * as mdicons from '@mdi/js'

const mdi: Record<string, string> = {}
Object.keys(mdicons).forEach((key) => {
  const value = (mdicons as Record<string, string>)[key]
  mdi[
    key
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/([0-9]+)/g, '-$1')
  ] = value
})

export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['vue-echarts', 'resize-detector'],
  },

  ssr: true,
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    'nuxt-auth-utils',
    '@nuxt/test-utils/module',
  ],
  css: ['~/assets/styles/index.css'],
  experimental: { typedPages: true },
  typescript: { shim: false, strict: true },
  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        viewportSize: true,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {},
        reloadOnFirstRequest: true,
      },
    },
  },
  vite: {
    plugins: [
      regexpPlugin({
        exclude: ['node_modules/**'],
        find: /\b(?<![/\w])(mdi-[\w-]+)\b(?!\.)/,
        replace: (match: string) => {
          if (mdi[match]) {
            return mdi[match]
          } else {
            // eslint-disable-next-line no-console
            console.warn('[plugin-regexp] No matched svg icon for ' + match)
            return match
          }
        },
        sourcemap: false,
      }),
    ],
  },
  runtimeConfig: {
    github: {
      clientId: '',
      clientSecret: '',
    },
    session: {
      name: 'nuxt-session',
      password: '',
    },
  },
})
