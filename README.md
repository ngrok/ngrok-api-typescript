<!-- Code generated for API Clients. DO NOT EDIT. -->

# Unstable

This library is currently unstable. We know of rough edges
and are working to bring it to parity with our other API client
libraries. Please feel free to try it out and let us know if you find
it useful!

# ngrok API client library for JavaScript and TypeScript

This library wraps the [ngrok HTTP API](https://ngrok.com/docs/api) to make it
easier to consume in JavaScript or TypeScript.

## Installation

The published library is available on
[npm](https://www.npmjs.com/package/@ngrok/ngrok-api).

```shell
npm install @ngrok/ngrok-api
```

## Support

The best place to get support using this library is through the [ngrok Slack Community](https://ngrok.com/slack). If you find any bugs, please contribute by opening a [new GitHub issue](https://github.com/ngrok/ngrok-api-typescript/issues/new/choose).

## Documentation

A quickstart guide and a full API reference are included in the [ngrok
TypeScript API documentation](https://typescript-api.docs.ngrok.com)

### Quickstart

After you've installed the package, you'll need an API Key. Create one on the
[API Keys page of your ngrok dashboard](https://dashboard.ngrok.com/api/keys).

In your application's code, initialize an `Ngrok` client object with an API
key. API resources can be accessed as properties of the `Ngrok` object.

```typescript
import { Ngrok } from '@ngrok/ngrok-api';

const ngrok = new Ngrok({
  apiToken: '<API KEY>',
});

const domain = await ngrok.domains.create({
  name: 'your-name.ngrok.io',
});
console.log(domain);
```

### Automatic Paging

The ngrok API pages all list resources but this library abstracts that
implementation detail away from you. `list()` methods will return collections
that can be iterated over and the implementation will fetch the pages from the
API for you behind the scenes.

```typescript
import { Ngrok } from '@ngrok/ngrok-api';

const ngrok = new Ngrok({
  apiToken: '<API KEY>',
});

(await ngrok.tunnels.list()).forEach(t => console.log(t));
```

### Async Programming

All API methods return a `Promise` and are suitable for use in asynchronous
programming. You can use callback chaining with `.then()` and `.catch()` syntax
or the `await` keyword to wait for completion of an API call.

```typescript
// await style
const cred = await ngrok.credentials.create({ description: 'example' });
console.log(cred);

// callback chaining
ngrok.credentials.create({ description: 'example' }).then(cred => {
  console.log(cred);
});
```

### Error Handling

The ngrok API returns detailed information when an API call fails. If an error
is encountered, API methods throw the rich `Error` type on resolution of a
returned `Promise`. This allows your code to gracefully handle different error
conditions.

The `Error` type includes a `statusCode` property which can be used to
distinguish not found errors when a resource does not exist:

```typescript
import { Error } from '@ngrok/ngrok-api';

try {
  await ngrok.ipPolicies.update({
    id: 'someInvalidId',
    description: 'updated description',
  });
} catch (err: Error) {
  if (err.statusCode == 404) {
    console.log('no ip policy with that id to update');
  }
}
```

Every error returned by the ngrok API includes a [unique, documented error
code](https://ngrok.com/docs/errors) that you can use to distinguish unique
error conditions. Use the `errorCode` property in your application code to
handle handle different error conditions.

```typescript
import { Error } from '@ngrok/ngrok-api';

try {
  await ngrok.ipPolicies.create({
    action: 'something invalid',
  });
} catch (err: Error) {
  if (err.errorCode == 'ERR_NGROK_1410') {
    console.log('not a valid ip policy action');
  } else {
    console.log('some other error', err);
  }
}
```
