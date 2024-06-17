import { Hono } from 'hono';
import {userRouter}  from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>();
app.use('/*', cors())
// app.use( cors({
//   origin: "https://bloging-app-git-master-swastikpratikbits-projects.vercel.app"
// }))
app.get('/', (c) => {
  return c.json({
    message: "root is working",
  });
})
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


export default app;

