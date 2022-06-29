 import {Customer} from "./Customer"
 import{Serializers} from "../modules/helpers/serializers"
import { UsersType } from "./usersType";
export class Clerk extends Customer {
    mansione: string
    key: string
    getElement(): { element: string; genere: "o"; } {
        return { genere: 'o', element: 'addetto' }
    }

    getCountingText(): {plural:string,singular:string} {
        return { plural:'addetti', singular: 'addetto' }
    }

    load(v: {}): this {
        Object.assign(this, v)
        return this
    }

    serialize() {
      const serializers = new Serializers()
        var out = { ...super.serialize(), ...{ mansione: serializers.serialize2String( this.mansione) } }

        return out
    }
    constructor(v?: {}) {
        super(v)
        this.userType = UsersType.clerk
    }
}