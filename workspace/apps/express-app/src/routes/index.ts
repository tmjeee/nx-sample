
import express from 'express';
import * as versionRoute from './paths/version.route';
import path from "path";

export const init = (app: express.Application)=> {
   console.log(`init routes`);

   app.use('/assets', express.static(path.join(__dirname, '../assets')));

   const rootRouter = express.Router();
   const apiRouter = express.Router();

   rootRouter.use('/api', apiRouter);
   app.use('/', rootRouter);

   versionRoute.init(rootRouter, apiRouter)
}
