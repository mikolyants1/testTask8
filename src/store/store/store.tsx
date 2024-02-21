import slice, { action } from "../slice/slice";
import storage from 'redux-persist/lib/storage'
import {Persistor, WebStorage, persistReducer,
persistStore } from 'redux-persist'
import {combineReducers,configureStore,bindActionCreators,
CaseReducerActions} from '@reduxjs/toolkit'
import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux'
import { AppDispatch, IAction, IColor, Pay, RootState } from "../../types/type";

 interface state {
    color:IColor
  }
interface store {
    key:string,
    storage:WebStorage
}
const config:store={
    key:'colors',
    storage
}
const combine = combineReducers({
    color:slice,
});
const persist = persistReducer(config,combine);

export const store = configureStore({
    reducer:persist,
}) ;

export type bind=CaseReducerActions<{
    setColor:(state:IColor,action:Pay<string>)=>void,
    delColor:(state:IColor,action:Pay<number>)=>void,
    chanColor:(state:IColor,action:Pay<IAction>)=>void,
},"colors">;


export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getColor = ({color}:state) => color.colors;

export const useAction=():bind=>bindActionCreators(action,useAppDispatch());

export const catched:Persistor=persistStore(store);