import { Link } from "react-router-dom"
import styles from '../../../style/timer.module.css';

interface props {
    path:string
}
function LinkCard({path}:props):JSX.Element {
  const text:string = path == "/" ? "timer" : "palette";
  return (
    <div className={styles.link}>
      <Link to={path}>
        {text}
      </Link>
    </div>
  )
}

export default LinkCard