/* tategaki index.js */
/*eslint-env node */
/*eslint no-console: off */

import path from 'path';
import Koa from 'koa';
import serv from 'koa-static';

const app = new Koa();

// default page
/*
const router = new Router();
router.get('/', async (ctx, next) => {
  const url = ctx.rquest.url;

  console.log(`url = ${url}`);
  if (path.slice(-1) !== '/') {
    console.log(`add slash:${ctx.url}`);
    ctx.url += '/';
  }
  await next();
});*/
app.use(async (ctx, next) => {
  const path = ctx.request.path;

  if (path === '') {
    console.log(`add slash:${ctx.url}`);
    console.log(`url:${ctx.request.url}`);
    console.log(`path:${ctx.request.path}`);
    ctx.request.path += '/';
    console.log(`url:${ctx.request.url}`);
    console.log(`path:${ctx.request.path}`);
  }

  await next();
});

// static resource
app.use(serv(path.join(__dirname, '/static'), {
  index: 'tategaki.html',
  extensions: ['html']
}));

export default app;
