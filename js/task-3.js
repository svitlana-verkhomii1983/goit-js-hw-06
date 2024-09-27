class StringBuilder {

  // Приватна властивість для зберігання рядка
  #value;

  // Конструктор приймає початковий рядок і зберігає його у приватну властивість
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для отримання поточного значення приватної властивості value
  getValue() {
    return this.#value;
  }

  // Метод для додавання рядка в кінець значення приватної властивості value
  padEnd(str) {
    this.#value += str;
  }

  // Метод для додавання рядка на початок значення приватної властивості value
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для додавання рядка на початок і в кінець значення приватної властивості value
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Ініціалізація екземпляра класу та перевірка його роботи
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

