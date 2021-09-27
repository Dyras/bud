## API Report File for "@roots/bud-compiler"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Compiler as Compiler_2 } from '@roots/bud-framework';
import { Compiler as Compiler_3 } from 'webpack';
import { Service } from '@roots/bud-framework';
import { StatsCompilation } from 'webpack';

// @public
export class Compiler extends Service implements Compiler_2 {
    before(): any[];
    callback(...args: any[]): void;
    compile(): Compiler_2.Instance;
    instance: Compiler_2.Instance;
    isCompiled: boolean;
    // (undocumented)
    name: string;
    progress: Compiler_2.Progress;
    // (undocumented)
    register(): void;
    // (undocumented)
    setup(config: any): Compiler_3;
    stats: StatsCompilation;
}

```