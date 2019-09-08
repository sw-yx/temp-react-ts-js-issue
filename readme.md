this is a repro of a TS - JS interop issue - inferred properties in JS are inferred as required, but there is no way to opt out of it.

- we have `allowJs: true`
- `index.tsx` imports `Button.js`
- `Button.js` has a `Button` component with a destructured prop `color`. this is inferred as a REQUIRED prop... but actually is optional because of code lower down

run `yarn ts` to see failure. This repo is meant as a repro indicative of some JS-to-TS conversion issues - where converting a single file is impossible without converting yet more files, causing yak shaving.

```bash
$ tsc
src/index.tsx:11:8 - error TS2741: Property 'color' is missing in type '{}' but required in type '{ color: any; }'.

11       <Button />
          ~~~~~~


Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

this is a hurdle for converting JS codebases to TS by the "just rename it" strategy because it causes cascading errors.
