import { ColorPicker } from 'antd'
import { Color } from 'antd/es/color-picker'
import { memo, useContext, useState } from 'react'
import { bind, useAction } from '../../../store/store/store'
import { IOpen } from '../../../types/type';
import { Context } from '../../helpers/context';
import styles from '../../../style/palette.module.css';

function ColorPickerCard():JSX.Element {
  const {setColor,chanColor}:bind = useAction();
  const [hex,setHex] = useState<string>("");
  const {state,dispatch} = useContext<IOpen>(Context);

  const changeColor = (_:Color,hex:string) => {
    setHex(hex);
  };

  const setOpen = (open:boolean):void => {
    dispatch({open})
  };

  const add = ():void => {
    if (state.isUpdate){
      chanColor({
        color:hex,
        idx:state.index
      });
    } else setColor(hex);
    dispatch({
      isUpdate:false,
      open:false
    });
  };

  return (
    <div className={styles.header}>
      <ColorPicker 
       className={styles.pick}
       onChange={changeColor}
       onOpenChange={setOpen}
       open={state.open}
       />
       <button
        className={styles.add}
        onClick={add}>
          add color
       </button>
    </div>
  )
}

export default memo(ColorPickerCard)