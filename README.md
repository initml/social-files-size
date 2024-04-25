# Social media sizes

This repo want to centralize all the sizes information of social networks services on a simple JSON file and expose it.

## Packages

Actually only JS package is available as a wrapper to help integration. It export the zod schema, TS type and some utilities.

### How to use it ?

The code is fully typed.

#### Get type and schema

```ts
import type { Data } from '@open-initml/social-media-size'
import { DataSchema } from '@open-initml/social-media-size'
```

#### Use an utility function

```ts
import { filterSizesByPlatform } from '@open-initml/social-media-size'
```
