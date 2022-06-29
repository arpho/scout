import { DateModel } from "../user/models/birthDateModel"

export class Serializers{

    serialize2String = (v: string) => {
      return   v ? v : ''
    }

    serialize2PositiveNumber = (n: number,defaultNumber=-1) => {
      return  n ? n : defaultNumber
    }
    serialize2Array(v:Array<any>){
      return v?v:[]

    }
    serializeDateModel(date:DateModel){
      let out = ""
      if(date){
        out = date.formatDate()
      }
      return out
    }
}