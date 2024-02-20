import { IAction, IColor, Pay } from "../../types/type";
import {createSlice} from '@reduxjs/toolkit'
import { bind } from "../store/store";

const initialState:IColor = {
    colors:[]
};

export const colorSlice = createSlice({
    name:'colors',
    initialState,
    reducers:{
        setColor:(state:IColor,action:Pay<string>):void=>{
          state.colors = [
            ...state.colors,action.payload
          ];
        },
        delColor:(state:IColor,action:Pay<number>):void=>{
           state.colors = state.colors.filter(
            (_:string,idx:number)=>idx !== action.payload);
        },
        chanColor:(state:IColor,action:Pay<IAction>):void=>{
          const {idx,color}:IAction = action.payload;
          state.colors = state.colors
          .map((item:string,i:number)=> i == idx ? color : item);
        }
    }
})

export const action:bind = colorSlice.actions;

export default colorSlice.reducer;