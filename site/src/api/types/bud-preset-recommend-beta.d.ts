/**
 * Recommended preset configuration for Bud.
 *
 * @see https://roots.io/bud
 * @see https://github.com/roots/bud
 *
 * @remarks
 * This preset is a wrapper for the following presets:
 *
 * - {@link @roots/bud-babel# | @roots/bud-babel}
 *
 * - {@link @roots/bud-postcss# | @roots/bud-postcss}
 *
 * - {@link @roots/bud-entrypoints# | @roots/bud-entrypoints}
 *
 * @remarks
 * - 💁 Composable - Build exceptional applications with a modular, configurable build system
 *
 * - 💪 Modern - Modern framework written in TypeScript with an expressive API
 *
 * - 🌱 Easy - Low bundle size and fast build times
 *
 * @extension @packageDocumentation @betaDocumentation
 */

import {Extension} from '@roots/bud-framework'
import {Factory} from '@roots/bud-framework'
import {Framework} from '@roots/bud-framework'

/**
 * Recommended preset configuration for Bud.
 *
 * @remarks
 * This preset is a wrapper for the following presets:
 *
 * - {@link @roots/bud-babel# | @roots/bud-babel}
 *
 * - {@link @roots/bud-postcss# | @roots/bud-postcss}
 *
 * - {@link @roots/bud-entrypoints# | @roots/bud-entrypoints}
 *
 * @public
 */
export declare interface BudPresetRecommend
  extends Extension.Module {
  name: '@roots/bud-preset-recommend'
  register: Factory<[Framework], unknown>
}

/**
 * Recommended preset configuration for Bud.
 *
 * @public
 */
export declare const BudPresetRecommend: BudPresetRecommend

declare const name_2: '@roots/bud-preset-recommend'
export {name_2 as name}

export declare const register: Factory<[Framework], unknown>

export {}
