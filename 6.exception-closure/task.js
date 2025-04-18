﻿// Задача 1. Форматтер чисел

function parseCount(value) {
  const result = Number.parseFloat(value); 
  if (Number.isNaN(result)) throw new Error("Невалидное значение");
  return result;    
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    throw error;
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
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return s.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);      
  } catch (error) {
    return {
      area: function () { return "Ошибка! Треугольник не существует" },
      perimeter: function () { return "Ошибка! Треугольник не существует" }
    }
  }
}