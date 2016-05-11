# Loose chat client

A web-based chat client.

## Tests

```sh
npm test # One-off
npm run autotest # Keep running 'em on every save
```

## Run it

```sh
npm start
```

This will run a web server serving up your chat client. It will also start
watching your files, and rebuilding the bundle on every save. There are two
bundles: the vendor bundle, and your stuff. The vendor bundle is built once at
startup, while your code is built on every save. If you add new dependencies,
they will end up in your bundle if you don't actively prevent it. That is bad
because it makes your build slow. Add the new dependency to the vendor bundle
and exclude it from your bundle by referring to how the existing dependencies
are handled in package.json.
