import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'

const app = new Hono()

app.use('*', poweredBy())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

app.get("/public/*", async (ctx) => {
  return await ctx.env.ASSETS.fetch(ctx.req);
});
