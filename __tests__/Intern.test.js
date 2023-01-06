const Intern = require("../lib/intern");

describe("Intern", () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            const intern = new Intern(3, "Alisah", "Alisah.tester@gmail.com", "Temple University");
      
            // Verify that the new object has the correct properties
            expect(intern.id).toEqual(3);
            expect(intern.name).toEqual("Alisah");
            expect(intern.email).toEqual("Alisah.tester@gmail.com");
            expect(intern.school).toEqual("Temple University");
          });

          it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const int = () => new Intern();
      
            // Verify that an error was thrown in the callback function
            expect(int).toThrow();
          });

          it("should throw an error if not provided an age", () => {
            const int = () => new Intern("Alisah");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(int).toThrowError(err);
          });

          it("should throw an error if 'name' is not a string", () => {
            const int = () => new Intern(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(int).toThrowError(err);
          });

          it("should throw an error if 'email' is not a string", () => {
            const int = () => new Intern(3, 2);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(int).toThrowError(err);
          });

          it("should throw an error if 'school' is not a string", () => {
            const int = () => new Intern(3, 2);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
            expect(int).toThrowError(err);
          });
    });
