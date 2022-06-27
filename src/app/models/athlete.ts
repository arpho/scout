import { Customer } from "./Customer";
import { DominantSide } from "./dominantSide";
import { UsersType } from "./usersType";

export class Athlete extends Customer{

  userType= UsersType.athlete
  dominantHand:DominantSide
  dominantFoot:DominantSide
}