//Задача 1. Печатное издание

class PrintEditionItem {
  name;
  releaseDate;
  pagesCount;
  _state;
  type;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value <= 0) {
      this._state = 0;
    } else if (value >= 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine";
}

class Book extends PrintEditionItem {
  type = "book";

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

// Задача 2. Библиотека

class Library {
  name;
  books = [];

  constructor(name) {
    this.name = name;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index][type] === value) {
        return this.books[index];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index].name === bookName) {
        let book = this.books[index];
        this.books.splice(index, 1);
        return book;
      }
    }
    return null;
  }
}

const library = new Library("Библиотечный информационно-культурный центр");

library.addBook(
  new DetectiveBook("Стиг Ларссон", "Девушка с татуировкой дракона", 2009, 624)
);

library.addBook(
  new FantasticBook(
    "Жюль Верн",
    "Вокруг све́та за во́семьдесят дней",
    1872,
    350
  )
);

library.addBook(
  new NovelBook(
    "Рэй Брэдбери",
    "451 градус по Фаренгейту",
    1953,
    200
  )
);

library.addBook(
  new FantasticBook(
    "	Фрэнсис Стивенс",
    "Головы Цербера",
    1919,
    191
  )
);

console.log("Книг в библиотеке: " + library.books.length);
let book1 = library.giveBookByName("451 градус по Фаренгейту");
console.log("Книг в библиотеке: " + library.books.length);

book1.state = 90;
console.log(book1.state);
book1.fix();
console.log(book1.state);
// book1.state = 100;
// console.log(book1.state);


library.addBook(book1);
console.log("Книг в библиотеке: " + library.books.length);

//Задача 3. Журнал успеваемости *

class Student {
  marks = {};

  constructor(name) {
    this.name = name;

  }

  addMark(mark, nameSubject) {
    if(mark < 2 || mark > 5) return;
    if(!this.marks.hasOwnProperty(nameSubject)) {
      this.marks[nameSubject] = [mark];
    } else {
      this.marks[nameSubject].push(mark);
    }
  }

  getAverageBySubject(nameSubject) {
    if(!this.marks.hasOwnProperty(nameSubject)) return 0; 
    let avg = this.marks[nameSubject].reduce((acc, item) => acc + item) / this.marks[nameSubject].length;
    return avg;
  }

  getAverage() {
    let nameSubject = Object.keys(this.marks);
    let avg = nameSubject.reduce((acc, item) => acc + this.getAverageBySubject(item), 0) / nameSubject.length;
    return avg;
  }
} 


const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5

console.table(student);

student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.

console.log(student.getAverageBySubject("физика"));
console.log(student.getAverageBySubject("биология"));

student.getAverage(); // Средний балл по всем предметам 4.75

console.log(student.getAverage());