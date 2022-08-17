(() => {
  type Gender = "M" | "F";
  /* class Person {
    //forma larga
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
    }*/
  //En este ejemplo No se cumple el Principio de responsabilida Unica
  //forma corta
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }
  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      //llamar al constructor del padre
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCrendentials() {
      return true;
    }
  }
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }
  //No cumple con el principio
  //porque esta clase hace muchas cosas
  const newUserSetting = new UserSettings(
    "/folder/example",
    "/jmm",
    "np@mail.com",
    "admin",
    "Naren",
    "M",
    new Date("1995-06-22")
  );
  console.log({
    newUserSetting,
    areCredentialsValid: newUserSetting.checkCrendentials(),
  });
})();
