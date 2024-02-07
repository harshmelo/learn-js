class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

  getPersons() {
    return this._persons;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p);
  }

  pop() {
    if (this._persons.length === 0) {
      return null;
    }
    return this._persons.pop().age;
  }
}

let pstack = new PStackImpl();
pstack.push({ name: 'Jojo', age: 21 });
pstack.push({ name: 'Gabi', age: 29 });
pstack.push({ name: 'Dein', age: 19 });

console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.getPersons());
