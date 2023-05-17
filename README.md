#Showcasing how sveltekit doesn't load css from server

I just added a route that returns a css
`src/routes/css/[templateId]/+server.js`

And I'm pointing to it in the app.html file

`<link rel='stylesheet' type="text/css" href='%sveltekit.assets%/css/default.css'>
`

Divs should have borders, and the body should be blue, but no style is applied

```bash
pnpm i
pnpm run dev
```
