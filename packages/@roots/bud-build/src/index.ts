// Copyright (c) Roots Foundation, LLC. All rights reserved.
// Licensed under the MIT license.

/**
 * Compiler configuration builder
 *
 * @see https://roots.io/bud
 * @see https://github.com/roots/bud
 *
 * @remarks
 * - 💁 Composable - Build exceptional applications with a modular, configurable build system
 *
 * - 💪 Modern - Modern framework written in TypeScript with an expressive API
 *
 * - 🌱 Easy - Low bundle size and fast build times
 *
 * @core @packageDocumentation @betaDocumentation
 */

export {Build} from './Build'
export {Loader} from './Loader'
export {Item} from './Item'
export {Rule} from './Rule'

export * as items from './Build/items'
export * as loaders from './Build/loaders'
export * as rules from './Build/rules'
