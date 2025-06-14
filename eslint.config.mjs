import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    typescript: true,
    vue: true,
    stylistic: true,
    rules: {
      'node/prefer-global/process': 'off',
    },
  }),
)
