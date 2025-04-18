// Задача 1. Форматтер чисел

function parseCount(value) {
  const result = Number.parseFloat(value); 
  if (Number.isNaN(result)) throw new Error("Невалидное значение");
  return result;    
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задача 2. Треугольник

class Triangle {
  constructor(a, b, c) {
    if(a + b < c || a + c < b || b + c < a) throw new Error("Треугольник с такими сторонами не существует");
    this.a = a;
    this.b = b;
    this.c = c;    
  }

  get perimeter() {
    try {
      return this.a + this.b + this.c;
    } catch (error) {
      return ("Ошибка! Треугольник не существует");
    }
  }

  get area() {
    try {
      let p = this.perimeter / 2;
      let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number(s.toFixed(3));
    } catch (error) {
      return ("Ошибка! Треугольник не существует");
    }
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);      
  } catch (error) {
    return {
      get area() {return "Ошибка! Треугольник не существует"},
      get perimeter() {return "Ошибка! Треугольник не существует"}
    }
  }
}

const triangle = getTriangle(1,3,100);
triangle.perimeter = "неправильное значение";
triangle.area = "неправильное значение";
console.log(triangle.area);
console.log(triangle.perimeter);