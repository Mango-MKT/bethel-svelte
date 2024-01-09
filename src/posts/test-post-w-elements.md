---
title: Test Post /w Elements
description: Test post to show markdown, code block, components etc
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
  import Counter from '../routes/Counter.svelte';
</script>

## Markdown

Hey friends! 👋

```ts
function greet(name: string) {
	console.log(`Hey ${name}! 👋`)
}
```

<Counter />