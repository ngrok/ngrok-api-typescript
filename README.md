# ngrok API client library for JavaScript and TypeScript

This library wraps the [ngrok HTTP API](https://ngrok.com/docs/api) to make it easier to consume in JavaScript or TypeScript.

## Installation

The published library is available on [npm](https://www.npmjs.com/package/@ngrok/ngrok-api)

```shell
npm i @ngrok/ngrok-api
```

## Documentation

A quickstart guide and a full API reference are included in the [ngrok TypeScript API documentation](https://typescript-api.docs.ngrok.com)

API tokens are available via the [ngrok dashboard](https://dashboard.ngrok.com/api/keys).

## Quickstart

Please consult the [documentation](https://typescript-api.docs.ngrok.com) for additional examples.

# TypeScript Example

```typescript
import { EndpointConfiguration, Error, Ngrok } from '@ngrok/ngrok-api';

const ngrok = new Ngrok({
    apiToken: 'an api token',
    baseUrl: 'https://api.ngrok.com',
});

ngrok.EndpointConfigurations.create({
    type: 'https',
    description: 'some endpoint configuration description',
    metadata: 'some endpoint configuration metadata',
    request_headers: {
        add: new Map([
            ['x-frontend', 'ngrok']
        ]),
        remove: ['cache-control'],
    },
})
    .then((epc: EndpointConfiguration) => {
        console.log(epc);
    })
    .catch((err: Error) => {
        console.log(err);
    });
```
