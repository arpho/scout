import { Serializers } from "../modules/helpers/serializers";
import { DateModel } from "../modules/user/models/birthDateModel";
import { BioType } from "./bioType";
import { Customer } from "./Customer";
import { DominantSide } from "./dominantSide";
import { footballRole } from "./footbalRole";
import { UsersType } from "./usersType";

export class Athlete extends Customer {
  key: string
  city:string
  country: string
  nationality:string
  youthSectorTeams:string[]
  previousTeams:string[]
  actualTeam:string
  telephone:string
  weight:number
  height:number
  dob:DateModel
  bioType:BioType
  userType = UsersType.athlete
  dominantHand: DominantSide
  dominantFoot: DominantSide
  profilePictureUrl:string
  legalGuardianSignatureUrl:string
  footballRole:footballRole

  constructor(value?: {},key?:string) {
    super(value,key)
    this.load(value)
  }

  load(v: {}) {
    if(v){
  
    Object.assign(this, v)
    if(!this.level){
      this.level=3
    }

    this.dob = v['dob']?new DateModel(new Date(v['dob'])):undefined
    this.dor= v['dor']?new DateModel(new Date(v['dor'])):new DateModel(new Date())
  }
  else{
    this.level= 3
  }
    return this
  }
  serialize() {
    const serializer = new Serializers()
    return {
      ...super.serialize(),
      "dominantHand": serializer.serialize2PositiveNumber(this.dominantHand, 0),
      "dominantFoot": serializer.serialize2PositiveNumber(this.dominantFoot, 0),
      "email": serializer.serialize2String(this.email),
      "key":serializer.serialize2String( this.key),
      "note": serializer.serialize2String(this.note),
      "profilePictureUrl":serializer.serialize2String(this.profilePictureUrl),
      "footballRole":serializer.serialize2PositiveNumber(this.footballRole,0),
      "bioType":serializer.serialize2PositiveNumber(this.bioType),
      "actualTeam":serializer.serialize2String(this.actualTeam),
      "legalGuardianSignatureUrl":serializer.serialize2String(this.legalGuardianSignatureUrl),
      "previousTeams":serializer.serialize2Array(this.previousTeams),
      "youthSectorTeams":serializer.serialize2Array(this.youthSectorTeams),
      "height":serializer.serialize2PositiveNumber(this.height),
      "weight":serializer.serialize2PositiveNumber(this.weight),
      "city":serializer.serialize2String(this.city),
      "country":serializer.serialize2String(this.country),
      "dob":serializer.serializeDateModel(this.dob),
      "dor":serializer.serializeDateModel(this.dor),
      "telephone":serializer.serialize2String(this.telephone)
    }
  }



}