import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import styles from '../../style/timer.module.css'
import { ITime } from '../../types/type';
import createTime from '../helpers/createTime';
import LinkCard from '../ui/cards/LinkCard';

function Timer():JSX.Element {
  const [min,setMin] = useState<string>("");
  const [start,setStart] = useState<boolean>(false);
  const [now,setNow] = useState<ITime>({} as ITime);
  const [done,setDone] = useState<string>("");
  const timer = useRef<NodeJS.Timer>(null!);

  useEffect(():void=>{
    if (start){
      timer.current = setInterval(():void=>{
        setNow((prv:ITime)=>{
            const sec = prv.sec - 1;
            if (prv.min == 0 && prv.sec == 0){
                clearInterval(timer.current);
                setDone("done");
                return {min:0,sec:0};
               };
            if (sec < 0){
                return {
                  min:prv.min - 1,
                  sec:59
                };
            };
            return {
              min:prv.min,sec
            };
        });
        },1000);
    }
  },[start]);

  const change = (e:ChangeEvent<HTMLInputElement>):void => {
    setMin(e.target.value);
  };
  
  const begin = (e:KeyboardEvent<HTMLInputElement>):void => {
    if (e.key === "Enter"){
      setNow({min:Number(min),sec:0})
      setStart(true);
    };
  };

  return (
      <div className={styles.body}>
        <LinkCard path='palette'/>
        <input
         className={styles.input}
         onKeyUp={begin}
         onChange={change}
         type="text"
         />
        <div className={styles.time}>
          {!done ? (start&&(
            <>
              {createTime(now)}
            </>
          )) : "Done !"}
        </div>
      </div>
  )
}

export default Timer