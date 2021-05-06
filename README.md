## Doc Frame

> Common UI for docs page.

Previews http://fe.jimu.io/doc-frame/

### Usage

![](https://img.shields.io/npm/v/@worktools/doc-frame.svg?style=flat-square)

```bash
yarn add --dev @worktools/doc-frame
```

- DocSidebar

```tsx
import { DocSidebar, ISidebarEntry } from "@worktools/doc-frame";

let docItems: ISidebarEntry[] = [
  {
    title: "Demo 1",
    cnTitle: "例1",
    path: "demo1",
  },
  {
    title: "Demo 2",
    cnTitle: "例2",
    path: "demo2",
  },
];

<DocSidebar items={docItems} currentPath={path} onSwitch={(item) => setPath(item.path)} />;
```

- DocBlock

Markdown content rendered into block. When `embed` mode is activated, all borders and margins are removed:

```tsx
<DocBlock content="markdown content" embed></DocBlock>
```

- DocDemo

A card container with title and link:

```tsx
<DocDemo title="Demo of demo" link={"TODO"}>
  <div>The demo</div>
</DocDemo>
```

- DocSnippet

```tsx
<DocSnippet code={code} lang={"typescript"} />
```

### Workflow

https://github.com/jimengio/ts-workflow

### License

MIT
