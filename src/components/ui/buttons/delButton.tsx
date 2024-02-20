
import {memo} from 'react';
import { useAction } from '../../../store/store/store';
import styles from '../../../style/palette.module.css';

interface props {
    idx:number,
};

function delButton({idx}:props):JSX.Element {
  const {delColor} = useAction();

  const del = (i:number) => ():void => {
    delColor(i);
  };

  return (
    <div className={styles.delOpen}>
      <div onClick={del(idx)}
       className={styles.delBut}>
          +
      </div>
    </div>
  )
}

export default memo(delButton)