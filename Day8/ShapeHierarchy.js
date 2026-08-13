// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   describe() {
//     console.log(`The color is ${this.color}`);
//   }
//   get description() {
//     return `The shape is ${this.constructor.name} and color ${this.color}`;
//   }
// }
// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   describe() {
//     super.describe(); //The child overrides the parent's describe() method. super.describe() explicitly calls the parent's version.
//     console.log(`Circle: ${this.color},Area:${this.area}`);
//   }
//   set setRadius(value) {
//     if (value <= 0) {
//       //error massage
//     }
//     this.radius = value;
//   }
//   get area() {
//     return 3.1416 * this.radius * this.radius;
//   }
// }
// class Rectangle extends Shape {
//   constructor(color, width, height) {
//     super(color);
//     this.width = width;
//     this.height = height;
//   }
//   describe() {
//     super.describe(); //Parent class method
//     console.log(`Rectangle: ${this.color},Area:${this.area}`);
//   }
//   get area() {
//     return this.width * this.height;
//   }
// }
// const circle = new Circle("Red", 5);
// const rectangle = new Rectangle("Green", 5, 8);

// console.log(circle.color);
// console.log(circle.radius);
// console.log(circle.area);
// console.log(circle.description);
// circle.setRadius = 10;
// console.log(`Update area`);
// console.log(circle.area);
// circle.describe();

// console.log(rectangle.color);
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);
// console.log(rectangle.description);

// rectangle.describe();

// console.log(circle instanceof Circle);
// console.log(circle instanceof Shape);

// console.log(rectangle instanceof Rectangle);
// console.log(rectangle instanceof Shape);

//Factory

class Shape {
  static create(type, ...agrs) {
    if (type === "circle") {
      return new Circle(...agrs);
    } else if (type === "rectangle") {
      return new Rectangle(...agrs);
    } else {
      throw new Error(`Unknown shape type: ${type}`);
    }
  }
  constructor(color) {
    this.color = color;
  }
  describe() {
    console.log(`The color is ${this.color}`);
  }
  get description() {
    return `The shape is ${this.constructor.name} and color ${this.color}`;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    if (radius <= 0) {
      throw new Error("Radius must be greater than 0");
    }
    this.radius = radius;
  }

  describe() {
    super.describe(); //The child overrides the parent's describe() method. super.describe() explicitly calls the parent's version.
    console.log(`Circle: ${this.color},Area:${this.area}`);
  }
  set setRadius(value) {
    if (value <= 0) {
      throw new Error("Radius must be greater than 0");
    }

    this.radius = value;
  }
  get area() {
    return 3.1416 * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be greater than 0");
    }
    this.width = width;
    this.height = height;
  }
  describe() {
    super.describe(); //Parent class method
    console.log(`Rectangle: ${this.color},Area:${this.area}`);
  }
  get area() {
    return this.width * this.height;
  }
}

// const circle = Shape.create("circle");

// console.log(circle);
// console.log(circle instanceof Circle);
// console.log(circle instanceof Shape);

// const circle = Shape.create("circle", "Blue", 10);

// console.log(circle.color);
// console.log(circle.radius);
// console.log(circle.area);

const circle = Shape.create("circle", "Blue", 10);
try {
  const circle2 = Shape.create("circle", "Red", -5);
} catch (error) {
  console.log(error.message);
}
try {
  const rectangle = Shape.create("rectangle", "Green", -5, 8);
} catch (error) {
  console.log(error.message);
}

const rectangle = Shape.create("rectangle", "Green", 5, 8);

console.log(circle);
console.log(rectangle);

console.log(circle instanceof Circle);
console.log(circle instanceof Shape);

console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Shape);
try {
  const shape = Shape.create("triangle", "Yellow", 10);
} catch (error) {
  console.log(error.message);
}

try {
  circle.setRadius = -5;
} catch (error) {
  console.log(error.message);
}
