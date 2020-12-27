import {Framework} from './'
import {dotenv} from '@roots/bud-support'

/**
 * ## bud.env
 *
 * [🏡 Project home](https://roots.io/bud)
 * [🧑‍💻 roots/bud/packages/server](https://git.io/JkCQG)
 * [📦 @roots/bud-server](https://www.npmjs.com/package/@roots/bud-build)
 * [🔗 Documentation](#)
 */
export type Env = Framework.Container
export namespace Env {
  export type Data = dotenv.DotenvParseOutput
}
