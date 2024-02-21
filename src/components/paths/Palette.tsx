
import { getColor,useAppSelector } from "../../store/store/store"
import { Context } from "../helpers/context";
import ColorCard from "../ui/cards/ColorCard";
import ColorPickerCard from "../ui/cards/ColorPickerCard";
import { useReducer,} from "react";
import { initial, reducer } from "../helpers/reducer";
import styles from '../../style/palette.module.css';
import LinkCard from "../ui/cards/LinkCard";

function Palette():JSX.Element {
 const colors:string[] = useAppSelector(getColor);
 const [state,dispatch] = useReducer(reducer,initial);

  return (
    <div className={styles.body}>
      <Context.Provider
       value={{state,dispatch}}>
        <LinkCard path="/" />
        <ColorPickerCard />
        <div className={styles.items}>
         {colors.map((i:string,idx:number):JSX.Element=>(
          <ColorCard
           key={i}
           color={i}
           idx={idx}
          />
         ))}
        </div>
      </Context.Provider>
    </div>
  )
}

export default Palette