# ngrok JavaScript Client

[ngrok Link API](https://ngrok.com/docs/ngrok-link) JavaScript client library.

## TypeScript

Type definitions generated from protobuf definitions.

## Development Notes
Build API compiler
```
nd go install go.ngrok.com/cmd/apic
```

Generate TypeScript client library
```
apic
```

Generate JavaScript client library
```
npm install
npm run build
```

## Run Example

```
cd examples
npm install

# note: older versions of node require experimental module support
node --use-openssl-ca --experimental-modules index.mjs
```
