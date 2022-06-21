import { UsersType } from "../models/usersType";
import { RoleModel } from "../modules/user/models/privilegesLevelModel";
import { UserTpeModedl } from "../modules/user/models/UserTypeModel";

export const configs = {
  accessLevel: [
    new RoleModel({ key: "Sviluppatore", value: 1 }),
    new RoleModel({ key: "Responsabile", value: 2 }),
    new RoleModel({ key: "Utente standard", value: 3 })
  ],
  userType:[
	  {key:"atleta",value:UsersType.athlete},
	  {key:"scout",value:UsersType.scout},
	  {key:"team",value:UsersType.team},
  ],
  offlineEntityNumber: 0
};
