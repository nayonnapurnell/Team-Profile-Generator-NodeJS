const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
            const engineer = new Engineer(2, "Raulph", "raulph.tester@gmail.com", "raulph@github.com");
      
            // Verify that the new object has the correct properties
            expect(engineer.id).toBe(2);
            expect(engineer.name).toBe("Raulph");
            expect(engineer.email).toBe("raulph.tester@gmail.com");
            expect(engineer.github).toBe("raulph@github.com");
          });

          it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const eng = () => new Engineer();
      
            // Verify that an error was thrown in the callback function
            expect(eng).toThrow();
          });

          it("should throw an error if not provided an age", () => {
            const eng = () => new Engineer("Sarah");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(eng).toThrowError(err);
          });

          it("should throw an error if 'name' is not a string", () => {
            const eng = () => new Engineer(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(eng).toThrowError(err);
          });

          it("should throw an error if 'email' is not a string", () => {
            const eng = () => new Engineer(3, 2);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(eng).toThrowError(err);
          });

          it("should throw an error if 'github' is not a string", () => {
            const eng = () => new Engineer(3, 2);
            const err = new Error("Expected parameter 'github' to be a non-empty string");
      
            expect(eng).toThrowError(err);
          });
    });
    
