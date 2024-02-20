import { Action, IState } from "../../types/type";

export const initial:IState = {
  open:false,
  isUpdate:false,
  index:-1
}

export function reducer(state:IState,action:Action):IState{
   return {
    ...state,...action
  };
}