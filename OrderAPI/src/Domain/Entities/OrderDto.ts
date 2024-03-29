export class OrderDTO {
    FirstName: string;
    LastName: string;
    Food: string;
    Drink: string;
    SideDish?: string;
    Sauce?: string;
    AddFrie?: boolean;
    OrderDate: Date;
  
    constructor(
      firstName: string,
      lastName: string,
      food: string,
      drink: string,
      sideDish?: string,
      sauce?: string,
      addFrie?: boolean
    ) {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Food = food;
      this.Drink = drink;
      this.SideDish = sideDish;
      this.Sauce = sauce;
      this.AddFrie = addFrie;
      this.OrderDate = new Date();
  
      if (!this.isValid()) {
        throw new Error("OrderDTO is not valid");
      }
    }
  
    isValid(): boolean {
      return !!(
        this.FirstName &&
        this.LastName &&
        this.Food &&
        this.Drink
      );
    }
  }
  