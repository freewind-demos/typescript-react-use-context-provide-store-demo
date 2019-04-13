import {useState} from "react";

export type Store = {
  message: string
}

export type Actions = {
  updateMessage: (message: string) => void
}

export function createStore(defaultStore: Store) {
  console.log('> createStore()')

  const [store, setStore] = useState<Store>(defaultStore)
  const actions: Actions = {
    updateMessage: (message) => setStore({...store, message})
  }

  return {...store, ...actions}
}
