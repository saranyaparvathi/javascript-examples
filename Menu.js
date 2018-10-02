const menu = {
  _courses : {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
    
    set appetizers(appetizer) {
      this._appetizers.push(appetizer);
    },
    set mains(main) {
      this._mains.push(main);
    },
    set desserts(dessert) {
      this._desserts.push(dessert);
    }
  },
  get courses() {
    return Object.entries(this._courses);
  },
  
  addDishToCourse(courseName, dishName, dishPrice) { 
    const dish = {
      name : dishName,
      price : dishPrice  
    };
    switch(courseName) {
      case 'mains' : this._courses.mains = dish;
        break;
      case 'appetizers' : this._courses.appetizers = dish;
        break;
       case 'desserts' : this._courses.desserts = dish;
        break;
    }
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
}

menu.addDishToCourse('mains', 'pizza', 200)
menu.addDishToCourse('mains', 'pasta', 400)
menu.addDishToCourse('mains', 'lasagne', 500)
menu.addDishToCourse('desserts', 'icecream', 100)
menu.addDishToCourse('desserts', 'brownie', 200)
menu.addDishToCourse('desserts', 'waffles', 200)
menu.addDishToCourse('appetizers', 'fries', 300)
menu.addDishToCourse('appetizers', 'garlic bread', 200)
menu.addDishToCourse('appetizers', 'nuggets', 300)
const meal = menu.generateRandomMeal();
console.log(meal)