
  // tslint:disable: quotemark
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RoleModel } from "./privilegesLevelModel";
import { UserModel } from "./userModel";
import { DateModel } from "./birthDateModel";
const user = new UserModel();
describe("test build function", () => {
  const Val = {
    email: "a@b.c",
    firstName: "joe",
    lastName: "friend",
    level: 0,
    birthDate: { day: 16, month: 2, year: 1977 },
    enabled: true
  };
  it("the user is build correctly", () => {
const val = {
  email: "a@b.c",
  firstName: "joe",
  lastName: "friend",
  level: 0,
  birthDate: { day: 16, month: 2, year: 1977 },
  enabled: true
};
    user.build(val);
    expect(user.firstName).toBe(val.firstName);
    expect(user.lastName).toBe(val.lastName);
    expect(user.email).toBe(val.email);
    expect(user.birthDate.day).toBe(16);
    expect(user.birthDate.month).toBe(2);
    expect(user.birthDate.year).toBe(1977);
    expect(user.level).toBe(0);
    expect(user.birthDate instanceof DateModel).toBeTruthy();
    // checkingf privileges level
    expect(user.role instanceof RoleModel).toBeTruthy();
    console.log("ruolo",user,val)
    expect(user.roleFactory(0).key).toBe("Sviluppatore")
    expect(user.roleFactory(1).key).toBe("Responsabile")
    expect(user.roleFactory(2).key).toBe("Utente standard")
    expect(user.role.key).toBe("Sviluppatore")
    expect(user.role.value).toBe(0);
  });
});
describe("serialize should work", () => {const val = {
  email: "a@b.c",
  firstName: "joe",
  lastName: "friend",
  level: 1,
  birthDate: { day: 16, month: 2, year: 1977 },
  enabled: true
};
  user.build(val);
  it("the user is serialized", () => {
    const serializedUser = user.serialize();
    expect(typeof serializedUser).toBe("object");
    expect(serializedUser.firstName).toBe(val.firstName);
    expect(serializedUser.lastName).toBe(val.lastName);
    expect(serializedUser.level).toBe(val.level);
    expect(serializedUser.birthDate['day']).toBe(val.birthDate.day);
    expect(serializedUser.birthDate['month']).toBe(val.birthDate.month);
    expect(serializedUser.birthDate['year']).toBe(val.birthDate.year);
  });
});
