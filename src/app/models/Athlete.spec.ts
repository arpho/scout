import { Athlete } from "./athlete"

describe("Athlete should instantiate ",()=>{
  const test = new Athlete()
  it("should instantiate withouth data",()=>{
    expect(test).toBeDefined()
    expect(test.key).toBeUndefined()
    expect(test.uid).toBeUndefined()
  })
  it("hould setialize withouth undefined",()=>{
    expect(test.serialize().firstName).toBe("")
    expect(test.serialize().lastName).toBe("")
    expect(test.serialize().key).toBe("")
    expect(test.serialize().email).toBe("")
  })
})