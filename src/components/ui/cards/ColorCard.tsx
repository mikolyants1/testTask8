import { MouseEvent, memo, useContext, useState } from 'react'
import styles from '../../../style/palette.module.css';
import DelButton from '../buttons/delButton';
import { Context } from '../../helpers/context';
import { IOpen } from '../../../types/type';

interface props {
  color:string,
  idx:number
};

function ColorCard({color,idx}:props):JSX.Element {
  const [show,setShow] = useState<boolean>(false);
  const {dispatch} = useContext<IOpen>(Context);
  
  const chan = ():void => {
      dispatch({
       open:true,
       isUpdate:true,
       index:idx
      });
  };

  const showDelButton = (e:MouseEvent<HTMLDivElement>):void => {
    setShow(e.type === "mouseover")
  }
  return (
    <div
     onMouseOut={showDelButton}
     onMouseOver={showDelButton}
     className={styles.item}
     style={{
      backgroundColor:color
      }}>
       {show&&(
       <DelButton
        idx={idx}   
       />
       )}
       <div
        onClick={chan}
        style={{
         height:'100%',
         width:'100%'
          }}
        />
    </div>
  )
}

export default memo(ColorCard)