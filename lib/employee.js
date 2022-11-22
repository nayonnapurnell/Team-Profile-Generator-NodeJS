class Employee {
  constructor(id, name, email, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  getName() {
    console.log(`${this.name} is here.`);
  }

  getId() {
    console.log(`This employee has an id of: ${this.id}`);
  }

  getEmail() {
    console.log(`This employee's email is: ${this.email}`);
  }


  getRole() {
    return Employee;
  }
}

module.exports = Employee;
