import { Subjects as TeacherSubjects} from "./Teacher";
import { Subjects as SubjectSubjects} from "./Teacher";

declare module "./Teacher" {
    interface Teacher {
        experienceTeachingC?: number;
    }
}
namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        if (this.getTeacher && this.getTeacher.experienceTeachingC !== undefined) {
          return `Available Teacher: ${this.getTeacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
  