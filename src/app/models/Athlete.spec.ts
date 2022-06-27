import { Athlete } from "./athlete"
import { DominantSide } from "./dominantSide"

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
    uid:"uid",
    level:1,
    dominantFoot:DominantSide.left,
    dominantHand:DominantSide.right,
    enabled:true
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
    expect(test.role.value).toBe(1)
  })
})