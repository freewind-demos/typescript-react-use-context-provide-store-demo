import {Store, Actions} from "./Store";
import {createContext} from "react";

function defaultStoreRequiredButNotUsedInThisCase(): Store & Actions {
  return undefined as any;
}

export const StoreContext = createContext<Store & Actions>(defaultStoreRequiredButNotUsedInThisCase());

export default StoreContext;
