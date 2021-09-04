/**
 * ⚡️ Frontend build tools combining the best parts of Symfony Encore and Laravel Mix
 *
 * - 💁 Composable - Build boss web applications with a modular, configurable build system
 * - 💪 Modern - Modern framework that scales from a single file to thousands of lines of code
 * - 🌱 Easy - Low bundle size and fast build times
 *
 * @see https://roots.io/bud
 * @see https://github.com/roots/bud

 * @packageDocumentation
 */

import type {Item, Loader} from '@roots/bud-build'

import {BudBabelExtension} from './BudBabelExtension'
import {Config} from './Config'
import {DEFAULT_PLUGINS, DEFAULT_PRESETS} from './constants'

declare module '@roots/bud-framework' {
  interface Framework {
    babel: Config
  }

  namespace Framework {
    interface Extensions {
      '@roots/bud-babel': BudBabelExtension
    }

    interface Loaders {
      babel: Loader
    }

    interface Items {
      babel: Item
    }
  }
}

export {Config}

export {DEFAULT_PLUGINS, DEFAULT_PRESETS}

export const {name, register, boot} = BudBabelExtension
