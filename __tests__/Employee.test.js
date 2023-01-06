const Employee = require("../lib/employee");

describe("Employee class", () => {
        it("should create the Employee object with an id, name, and email", () => {
          const employee = new Employee(1, "Sarah", "sara.tester@gmail.com");

          //verify that the new object has the correct properties
          expect(employee.id).toEqual(1);
          expect(employee.name).toEqual("Sarah");
          expect(employee.email).toEqual("sara.tester@gmail.com");
});

it("should throw an error if provided no arguments", () => {
    // Wrap the object initialization in a callback function that Jest will run
    const emp = () => new Employee();

    // Verify that an error was thrown in the callback function
    expect(emp).toThrow();
  });

  it("should throw an error if not provided an id", () => {
    const emp = () => new Employee("Sarah");

    // Define the error message that is expected to be thrown
    const err = new Error("Expected parameter 'id' to be a number");

    // Verify that the correct error was thrown when the callback is executed
    expect(emp).toThrowError(err);
  });

  it("should throw an error if 'name' is not a string", () => {
    const emp = () => new Employee(3, 2);
    const err = new Error("Expected parameter 'name' to be a non-empty string");

    expect(emp).toThrowError(err);
  });

  it("should throw an error if 'email' is not a string", () => {
    const emp = () => new Employee(1, 5);
    const err = new Error("Expected parameter 'email' to be a non-empty string");

    expect(emp).toThrowError(err);
  });
})