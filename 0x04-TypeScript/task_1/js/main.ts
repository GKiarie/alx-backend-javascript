interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

// Define the interface for the printTeacher function
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const fullName = `${firstInitial}. ${lastName}`;
  
    return fullName;
  };

// Define the interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  // Define the interface for the class
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }