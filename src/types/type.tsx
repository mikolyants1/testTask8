import {PayloadAction} from '@reduxjs/toolkit'
import { Dispatch} from 'react'
import { store } from '../store/store/store'

export interface IColor {
    colors:string[]
}

export interface IAction {
    color:string,
    idx:number
}

export interface ITime {
    min:number,
    sec:number
}
export interface IState {
    open:boolean,
    isUpdate:boolean,
    index:number
 }
 
 export type Action = Record<string,IState[keyof IState]>;
 
export interface IOpen {
    state:IState,
    dispatch:Dispatch<Action>
}
export type Pay<T> = PayloadAction<T>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
