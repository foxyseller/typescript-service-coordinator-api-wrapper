# @foxyseller/parser-coordinator-api-wrapper

### Install

```bash
$ pnpm i git+ssh://git@github.com:foxyseller/typescript-parser-coordinator-api-wrapper.git#0.1.0
```

### Usage

``` typescript
import { ParserCoordinatorApi } from '@foxyseller/parser-coordinator-api-wrapper';

const coordinator = new ParserCoordinatorApi({
    baseUrl: https://foxyseller-pc.korso.cc,
    apiKey: '******',
});

const request = coordinator.parserTask.take({
    take: 10,
    parserTaskType: 'WildberriesScraper',
    parserTaskSubType: 'GetProductCard',
});

const json = await request.json();

console.log(json);
```

### Run linters & formatters before commit
```bash
$ pnpm run format
```

### Test
```bash
$ pnpm run test
```
