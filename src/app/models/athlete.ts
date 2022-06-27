import { Serializers } from "../modules/helpers/serializers";
import { Customer } from "./Customer";
import { DominantSide } from "./dominantSide";
import { UsersType } from "./usersType";

export class Athlete extends Customer {
  key: string
  constructor(value?: {}) {
    super(value)
    this.load(value)
  }

  load(v: {}) {
    Object.assign(this, v)
    return this
  }
  serialize() {
    const serializer = new Serializers()
    return {
      ...super.serialize(),
      "dominanthand": serializer.serialize2PositiveNumber(this.dominantHand, 0),
      "dominantFoot": serializer.serialize2PositiveNumber(this.dominantFoot, 0),
      "email": serializer.serialize2String(this.email),
      "key":serializer.serialize2String( this.key)
    }
  }




  userType = UsersType.athlete
  dominantHand: DominantSide
  dominantFoot: DominantSide
}