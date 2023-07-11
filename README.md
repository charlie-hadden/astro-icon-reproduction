# Reproduction for astro-icon type generation

This is a reproduction for the issue described here: https://github.com/natemoo-re/astro-icon/issues/126. We are only using a local collection here, and only with one icon, which is used in `src/pages/index.astro`.

When running `astro dev`, `.astro/icon.d.ts` gets generated like so:

```ts
declare module 'astro-icon' {
    export type Icon =
		| "test";

  }
```

However, if we run `astro check` (stopping `astro dev` first might make this more obvious - I'm not sure if there's a race condition otherwise), the file gets generated incorrectly:

```ts
declare module 'astro-icon' {
    export type Icon = never;

  }
```

And because the type gets generated as `never`, `astro check` results in an error:

```
src/pages/index.astro:15:11 Error: Type 'string' is not assignable to type 'never'.
14    <h1>Astro</h1>
15      <Icon name="test" />
              ~~~~
16   </body>
```
