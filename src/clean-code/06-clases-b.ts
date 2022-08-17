(() => {
  //En este ejemplo No se cumple el Principio de responsabilida Unica
  type Gender = "M" | "F";
  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }
  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCrendentials() {
      return true;
    }
  }
  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const newUserSetting = new UserSettings({
    birthdate: new Date("1995-06-22"),
    email: "np@mail.com",
    gender: "M",
    lastOpenFolder: "/jmm",
    name: "Naren",
    role: "admin",
    workingDirectory: "/folder/example",
  });
  console.log({
    newUserSetting,
    areCredentialsValid: newUserSetting.checkCrendentials(),
  });
})();
