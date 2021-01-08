import Service from './Service'
import {Framework} from '@roots/bud-typings'

/**
 * ## bud.cache [🏠 Internal]
 *
 * Cache utlity for Webpack modules.
 *
 * [🏡 Project home](https://roots.io/bud)
 * [🧑‍💻 roots/bud](#)
 * [📦 @roots/bud-cache](#)
 * [🔗 Documentation](#)
 */
export class Cache extends Service {
  /**
   * ## bud.cache.enabled [🏠 Internal]
   *
   * Returns boolean true if cache is enabled
   *
   * Cache is enabled when there is a cache record to read on disk and
   * the buildCache feature is enabled.
   *
   * ```js
   * bud.cache.enabled()
   * // => true if cache is enabled
   * ```
   */
  public enabled(): boolean {
    return (
      this.app.store.get('features.buildCache') &&
      this.app.disk
        .get('project')
        .exists(
          this.app.store.get('webpack.webpack.recordsPath'),
        )
    )
  }

  /**
   * ## bud.cache.setCache [🏠 Internal]
   *
   * Sets the cache object in the webpack configuration.
   */
  public setCache(): void {
    this.enabled() &&
      this.app.hooks.on('webpack.cache', (bud: Framework) =>
        this.app.disk
          .get('project')
          .readJson(
            bud.store.get('webpack.webpack.recordsPath'),
          ),
      )
  }
}
