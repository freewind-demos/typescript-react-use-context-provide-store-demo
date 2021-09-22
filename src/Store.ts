import {useState} from "react";

export type Store = {
  message: string
}

export type Actions = {
  update: (payload: Partial<Store>) => void
}

export function createStore(defaultStore: Store) {
  console.log('> createStore()')

  const [store, setStore] = useState<Store>(defaultStore)
  const actions: Actions = {
    update: (payload) => setStore({...store, ...payload})
  }

  return {...store, ...actions}
}
