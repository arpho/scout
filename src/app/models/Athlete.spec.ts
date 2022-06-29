import { DateModel } from "../modules/user/models/birthDateModel"
import { Athlete } from "./athlete"
import { DominantSide } from "./dominantSide"
import { footballRole } from "./footbalRole"

describe("Athlete should instantiate ",()=>{
  
  it("should instantiate withouth data",()=>{
    const test = new Athlete()
    expect(test).toBeDefined()
    expect(test.key).toBeUndefined()
    expect(test.uid).toBeUndefined()
    expect(test.level).toBe(3)
    expect(test.role.value).toBe(3)
  })
  it("should serialize withouth undefined",()=>{
    const test = new Athlete()
    expect(test.serialize().firstName).toBe("")
    expect(test.serialize().lastName).toBe("")
    expect(test.serialize().key).toBe("")
    expect(test.serialize().email).toBe("")
    expect(test.serialize().level).toBe(3)
  })
  const data = {
    firstName:"joe",
    email:"i@iol.it",
    lastName:"friend",
    key:"key",
    dob:new DateModel(new Date("16-03-1977")).formatDate(),
    uid:"uid",
    note:"nota",
    telephone:"+393928502668",
    profilePictureUrl:"qwweerty",
    footballRole:footballRole["GK-goalkeeper"],
    level:1,
    actualTeam:"oratorio",
    youthSectorTeams:["peri","S.camillo"],
    legalGuardianSignatureUrl:"popopo",
    dominantFoot:DominantSide.left,
    dominantHand:DominantSide.right,
    previousTeams:["giarre calcio","ripostese"],
    enabled:true,
    height:184,
    weight:83.7,
    city:"milan",
    country:"italy"
  }
  it("should load data",()=>{
    const test = new Athlete(data)
    expect(test.firstName).toBe(data.firstName)
    expect(test.lastName).toBe(data.lastName)
    expect(test.uid).toBe(data.uid)
    expect(test.key).toBe(data.key)
    expect(test.email).toBe(data.email)
    expect(test.enabled).toBe(true)
    expect(test.level).toBe(1)
    expect(test.dob.formatDate()).toBe(new DateModel(new Date("16-03-1977")).formatDate())
    expect(test.telephone).toBe(data.telephone)
    expect(test.role.value).toBe(1)
    expect(test.dominantFoot).toBe(DominantSide.left)
    expect(test.dominantHand).toBe(DominantSide.right)
    expect(test.note).toBe(data.note)
    expect(test.profilePictureUrl).toBe(data.profilePictureUrl)
    expect(test.legalGuardianSignatureUrl).toBe(data.legalGuardianSignatureUrl)
    expect(test.footballRole).toBe(footballRole["GK-goalkeeper"])
    expect(test.actualTeam).toBe(data.actualTeam)
    expect(test.youthSectorTeams.length).toBe(2)
    expect(test.previousTeams.length).toBe(2)
    expect(test.city).toBe(data.city)
    expect(test.country).toBe(data.country)
    expect(test.dor).toBeDefined()
    expect(test.dor.formatDate()).toBe(new DateModel(new Date()).formatDate())
  })
  it("should serialize data",()=>{
    const test = new Athlete(data)
    expect(test.serialize().firstName).toBe(data.firstName)
    expect(test.serialize().lastName).toBe(data.lastName)
    expect(test.serialize().uid).toBe(data.uid)
    expect(test.serialize().key).toBe(data.key)
    expect(test.serialize().email).toBe(data.email)
    expect(test.serialize().enabled).toBe(true)
    expect(test.serialize().level).toBe(1)
    expect(test.serialize().telephone)
    expect(test.serialize().dob).toBe(new DateModel(new Date("16-03-1977")).formatDate())
    expect(test.role.value).toBe(1)
    expect(test.serialize().dominantFoot).toBe(DominantSide.left)
    expect(test.serialize().dominantHand).toBe(DominantSide.right)
    expect(test.serialize().note).toBe(data.note)
    expect(test.serialize().profilePictureUrl).toBe(data.profilePictureUrl)
    expect(test.serialize().legalGuardianSignatureUrl).toBe(data.legalGuardianSignatureUrl)
    expect(test.serialize().footballRole).toBe(footballRole["GK-goalkeeper"])
    expect(test.serialize().actualTeam).toBe(data.actualTeam)
    expect(test.serialize().youthSectorTeams.length).toBe(2)
    expect(test.serialize().previousTeams.length).toBe(2)
    expect(test.serialize().height).toBe(data.height)
    expect(test.serialize().weight).toBe(data.weight)
    expect(test.serialize().city).toBe(data.city)
    expect(test.serialize().country).toBe(data.country)
    expect(test.serialize().youthSectorTeams[0]).toBe[data.youthSectorTeams[0]]
    expect(test.serialize().previousTeams[0]).toBe[data.previousTeams[0]]
    expect(test.serialize().dor).toBe(new DateModel(new Date()).formatDate())
  })
})