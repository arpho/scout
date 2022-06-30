import { UsersType } from "../models/usersType";
import { RoleModel } from "../modules/user/models/privilegesLevelModel";
import { UserTypeModel } from "../modules/user/models/UserTypeModel";

export const configs = {
  accessLevel: [
    new RoleModel({key:"fai una scelta",value:0}),// i select non mostrano il valore 0
    new RoleModel({ key: "Sviluppatore", value: 1 }),
    new RoleModel({ key: "Responsabile", value: 3 }),
    new RoleModel({ key: "Utente standard", value: 2 })
  ],
  userType:[
	  {key:"atleta",value:UsersType.athlete},
	  {key:"scout",value:UsersType.scout},
	  {key:"team",value:UsersType.team},
	  {key:"clerk",value:UsersType.clerk},
  ],
  offlineEntityNumber: 0
};
