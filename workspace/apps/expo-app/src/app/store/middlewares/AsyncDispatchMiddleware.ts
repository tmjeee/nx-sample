import {Middleware} from "../Store";
import {AnyAction} from "redux";


export const asyncDispatchMiddleware: Middleware = store => next => action => {
    let queue: AnyAction[] = [];
    let flush = false;

    const flushQueue = () => {
        queue.forEach(action => store.dispatch(action));
        queue = [];
    }

    const asyncDispatch = (asyncAction: AnyAction) => {
        queue = queue.concat(asyncAction);
        if (flush) {
            flushQueue();
        }
    }

    const actionWithAsyncDispatch = {...action, asyncDispatch};
    const nextAction = next(actionWithAsyncDispatch);

    flush = true;
    flushQueue();

    return nextAction;
}
