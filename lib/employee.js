class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

 
  getName() {
    console.log(`${this.name} is here.`);
    return this.name;
  }

  getId() {
    console.log(`This employee has an id of: ${this.id}`);
    return this.id;
  }

  getEmail() {
    console.log(`This employee's email is: ${this.email}`);
    return this.email;
  }


  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
