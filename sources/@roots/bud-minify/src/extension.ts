import type {Bud} from '@roots/bud-framework'
import {Extension} from '@roots/bud-framework/extension'
import {expose} from '@roots/bud-framework/extension/decorators/expose'
import {label} from '@roots/bud-framework/extension/decorators/label'
import {production} from '@roots/bud-framework/extension/decorators/production'
import type {BudMinimizeCSSPublicInterface} from '@roots/bud-minify/minify-css'
import BudMinimizeCSS from '@roots/bud-minify/minify-css'
import type {BudMinimizeJSPublicInterface} from '@roots/bud-minify/minify-js'
import BudMinimizeJS from '@roots/bud-minify/minify-js'
import {bind} from '@roots/bud-support/decorators/bind'

/**
 * Minimizer configuration
 */
@label(`@roots/bud-minify`)
@expose(`minify`)
@production
class BudMinimize extends Extension {
  /**
   * JS minimizer configuration
   */
  public declare js: BudMinimizeJSPublicInterface

  /**
   * CSS minimizer configuration
   */
  public declare css: BudMinimizeCSSPublicInterface

  /**
   * {@link Extension.register}
   */
  @bind
  public override async register(bud: Bud) {
    await bud.extensions.add(BudMinimizeCSS)
    await bud.extensions.add(BudMinimizeJS)

    this.js = bud.extensions.get(`@roots/bud-minify/minify-js`)
    this.css = bud.extensions.get(`@roots/bud-minify/minify-css`)

    bud.set(`terser`, this.js)
    bud.set(`minimizeCss`, this.css)
  }

  /**
   * {@link Extension.buildBefore}
   */
  @bind
  public override async buildBefore(bud: Bud) {
    bud.hooks.on(`build.optimization.minimize`, () => true)
  }
}

export default BudMinimize
export type {BudMinimize}