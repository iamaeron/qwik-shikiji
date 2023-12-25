# Qwik Shikiji

Qwik component for beautiful code syntax highlighting by [Shikiji](https://shikiji.netlify.app).

## Installation

Use your preferred package manager, but this snippet uses [pnpm](https://pnpm.io):

```bash
pnpm add @iamaeron/qwik-shikiji shikiji
```

## Usage

Just import the component and you can use it simply like this:

```jsx
import { QwikShikiji } from "@iamaeron/qwik-shikiji";
import { Slot } from "builder.io/qwik";

export default component$(() => {
  const exampleCode = `export const CoolQwikSnippet = component$(() => {
    return (
        <div>Qwik is awesome!</div>
    )
})`;

  return <QwikShikiji code={exampleCode} lang="tsx" />;
});
```

### Customizing

Please wait for the official docs, I'll try to make it as fast as I can.
