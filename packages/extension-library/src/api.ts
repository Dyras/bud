import {Framework, Library} from './'
import AutoDllPlugin from 'autodll-webpack-plugin'

/**
 * ## bud.library  [💁 Fluent]
 *
 * Enables DLL ([dynamic link library](https://en.wikipedia.org/wiki/Dynamic-link_library))
 * caching of specified modules.
 *
 * - [🔗 Documentation](#)
 *
 * ### Usage
 *
 * Pass `bud.library` the module you would like to add to the DLL cache:
 *
 * ```js
 * bud.library('jquery')
 * ```
 *
 * Multiple modules can be added at once by passing an array
 *
 * ```js
 * bud.library(['react', 'react-dom'])
 * ```
 */
export const library: Library = function (
  this: Framework,
  modules: string[],
): Framework {
  this.use([
    'autodll-webpack-plugin',
    {
      options: {
        debug: false,
        inject: false,
        filename: '[name].[hash].js',
        entry: {
          library: modules,
        },
        path: 'dll',
        inherit: false,
        context: this.src(),
      },
      make: opts => new AutoDllPlugin(opts.all()),
    },
  ])

  return this
}
