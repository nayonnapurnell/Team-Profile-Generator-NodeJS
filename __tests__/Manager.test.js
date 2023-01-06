const Manager = require("../lib/manager");

describe("Manager", () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            const manager = new Manager(4, "Enocah", "Enocah.tester@gmail.com", "Temple University",28);
      
            // Verify that the new object has the correct properties
            expect(manager.id).toEqual(4);
            expect(manager.name).toEqual("Enocah");
            expect(manager.email).toEqual("Enocah.tester@gmail.com");
            expect(manager.officeNumber).toEqual(28);
          });

          it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const man = () => new Manager();
      
            // Verify that an error was thrown in the callback function
            expect(man).toThrow();
          });

          it("should throw an error if not provided an id", () => {
            const man = () => new Manager("Enocah");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(man).toThrowError(err);
          });

          it("should throw an error if 'name' is not a string", () => {
            const man = () => new Manager(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(man).toThrowError(err);
          });

          it("should throw an error if 'email' is not a string", () => {
            const man = () => new Manager(3, 2);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(man).toThrowError(err);
          });

          it("should throw an error if not provided an officeNumber", () => {
            const man = () => new Manager("Enocah");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'officeNumber' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(man).toThrowError(err);
          });
    });
