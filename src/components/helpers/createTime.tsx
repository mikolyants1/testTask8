import { ITime } from "../../types/type";

function createTime({min,sec}:ITime):string{
  const NullMin:string = min < 10 ? "0" : "";
  const NullSec:string = sec < 10 ? "0" : "";
  return `${NullMin}${min}-${NullSec}${sec}`
}

export default createTime