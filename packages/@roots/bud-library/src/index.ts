/**
 * ⚡️ Frontend build tools combining the best parts of Symfony Encore and Laravel Mix
 *
 * @see https://roots.io/bud
 *
 * @remarks
 * - 💁 Composable - Build boss web applications with a modular, hackable build system
 * - 💪 Modern - Modern framework that scales from a single file to thousands of lines of code
 * - 🌱 Easy - Low bundle size and fast build times with little to no configuration
 *
 * @packageDocumentation
 */

import {BudDllExtension} from './BudDllExtension'
import {BudDllPlugin} from './BudDllPlugin'
import {library} from './library'

declare module '@roots/bud-framework' {
  interface Framework {
    library: library
  }

  namespace Framework {
    interface Extensions {
      '@roots/bud-library': BudDllExtension
      'autodll-webpack-plugin': BudDllPlugin
    }
  }
}

export const {name, api} = BudDllExtension
