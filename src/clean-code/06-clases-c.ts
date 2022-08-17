(() => {
  //Aplicando el Principio de responsabilida Unica
  // Priorizar la comnposicion frente que la herencia (tratar de evitar los extends)

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
    email: string;
    role: string;
  }
  class User {
    private lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCrendentials() {
      return true;
    }
  }
  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }
  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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
  //composicion
  class UserSettings {
    public person: PersonProps;
    public user: UserProps;
    public settings: SettingsProps;
    constructor({
      name,
      gender,
      birthdate,
      role,
      email,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ role, email });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
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
    areCredentialsValid: newUserSetting.user.checkCrendentials(),
  });
})();
