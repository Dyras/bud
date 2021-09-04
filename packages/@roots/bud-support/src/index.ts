/**
 * ⚡️ Frontend build tools combining the best parts of Symfony Encore and Laravel Mix
 *
 * @see https://roots.io/bud
 * @see https://github.com/roots/bud
 *
 * @remarks
 * - 💁 Composable - Build boss web applications with a modular, hackable build system
 * - 💪 Modern - Modern framework that scales from a single file to thousands of lines of code
 * - 🌱 Easy - Low bundle size and fast build times with little to no configuration
 *
 * @remarks
 * `@roots/bud-tailwindcss` adds [tailwindcss](https://tailwindcss.com/') to [@roots/bud](https://github.com/roots/bud)
 *
 * @author Kelly Mears <kelly@roots.io>
 * @license MIT
 *
 * @packageDocumentation
 */

import cosmiconfigTsLoader from '@endemolshinegroup/cosmiconfig-typescript-loader'
import * as InkUseStyle from '@roots/ink-use-style'
import * as cosmiconfig from 'cosmiconfig'
import * as dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import Express from 'express'
import * as Ink from 'ink'
import * as InkGradient from 'ink-gradient'
import InkSpinner from 'ink-spinner'
import * as json5 from 'json5'
import * as Notifier from 'node-notifier'
import * as React from 'react'

import {chalk} from './external/chalk'
import * as globby from './external/globby'
import {pkgUp} from './external/pkg-up'
import {toml} from './external/toml'
import {yaml} from './external/yaml'
import {dump} from './util/dump'
import {killPort} from './util/killPort'
import * as wpPkgs from './util/wordpressPkgs'

export {dump}
export {killPort}
export {wpPkgs}

export {dotenv}
export {dotenvExpand}
export {globby}
export {Ink}
export {InkGradient}
export {InkSpinner}
export {InkUseStyle}
export {Notifier}
export {React}
export {Express}
export {chalk}
export {cosmiconfig}
export {cosmiconfigTsLoader}
export {pkgUp}
export {json5}
export {toml}
export {yaml}
