# @foxyseller/service-coordinator-api-wrapper

### Install

```bash
$ pnpm i git+ssh://git@github.com:foxyseller/typescript-service-coordinator-api-wrapper.git#0.1.0
```

### Usage

``` typescript
import { ServiceCoordinatorApi } from '@foxyseller/service-coordinator-api-wrapper';

const coordinator = new ServiceCoordinatorApi({
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
