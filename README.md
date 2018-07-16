# simple-resource-pool
A simple resource pool implementation in typescript.

## Installation

To use with node or a bundler:

```bash
$ npm install resource-pool
```

Directly in the browser:

```html
<script src="path/to/yourCopyOf/simple-resource-pool.js"></script>
```

or using the minified version:

```html
<script src="path/to/yourCopyOf/simple-resource-pool.min.js"></script>
```

or from [UNPKG](https://unpkg.com/):

```html
<script src="https://unpkg.com/simple-resource-pool@[version]/dist/simple-resource-pool.min.js"></script>
```

## Typings
Included for Typescript in index.d.ts

## Usage

```ts
import { ResourcePool } from 'simple-resource-pool'

import { MyResource } from './MyResource'

interface MyResource {
  foo: baz
}

const creator = () => new MyResource()

const rp = new ResourcePool<MyResource>(creator)

rp.getRes().then(res => {
  // ...do stuff with res...
  // ...
  // then release the resource
  rp.release(res)
})
```

## Documentation

Pending

Also since this package is in [UNPKG](https://unpkg.com/) you can use [dynamic-cdn-webpack-plugin](https://www.npmjs.com/package/dynamic-cdn-webpack-plugin) with it.

## Build

`npm run build` simply runs webpack using the included configuration file. Creates a universal module in the lib/ directory.

## Linting

`npm run lint`

## Running The Test Suite

Run the tests:

```
# npm run test
```
