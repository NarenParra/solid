type Size = "" | "S" | "M" | "L";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}
  toString() {
    //No DRY
    // se estaa duplicando el codigo
    /*  if (this.name.length <= 0) throw new Error("Name is empty");
    if (this.price <= 0) throw new Error("Price is empty");
    if (this.size.length <= 0) throw new Error("Size is empty"); */
    //
    if (this.isProductReady()) return;
    return `${this.name}, (${this.price}), ${this.size}`;
  }
  //DRY
  isProductReady(): boolean {
    //obtiene las propiedades de la clase
    for (const key in this) {
      //tomar la propiedad computada console.log(key, typeof this[key]);
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`${key} is empty`);
          break;
        default:
          throw new Error(`${key} is invalid`);
      }
    }
    return true;
  }
}

(() => {
  const bluePants = new Product("blue jhean");
  console.log(bluePants.toString());
})();
