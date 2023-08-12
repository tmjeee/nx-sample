
import {Router, Request, Response, NextFunction} from 'express';

export const init = (rootRouter: Router, apiRouter: Router) => {
    rootRouter.get('/',
        requestHandler,
    );
    apiRouter.get('/',
        requestHandler,
    );
}

const requestHandler =  (req: Request, res: Response, next: NextFunction) => {
    res.send({ message: 'Welcome to express-app!' });
}

