import store from "../store";

export interface IUseParams {
    id?: string,
}

export type IRootState = ReturnType<typeof store.getState>;
export type IRootDispatch = typeof store.dispatch;