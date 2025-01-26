// learnable project?
class Student {
    constructor(name, studentID) {
      this.name = name;
      this.studentID = studentID;
      this.grades = [];
    }

    addGrade(grade) {
      this.grades.push(grade);
    }
  
    viewDetails() {
      return `Name: ${this.name}, ID: ${this.studentID}, Grades: ${this.grades.join(', ')}`;
    }

    calculateAverage() {
      if (this.grades.length === 0) return 0;
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return total / this.grades.length;
    }
  }
  
  class HonorsStudent extends Student {
    constructor(name, studentID) {
      super(name, studentID);  
    }
  
    calculateAverage() {
      const baseAverage = super.calculateAverage(); 
      return baseAverage + 5; //
    }
  }
  
  class RegularStudent extends Student {
    constructor(name, studentID) {
      super(name, studentID);  
    }
  }
  
  class StudentManager {
    constructor() {
      this.students = [];
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    viewAllStudents() {
      return this.students.map(student => student.viewDetails()).join('\n');
    }
  
    getStudentAverage(studentID) {
      const student = this.students.find(stu => stu.studentID === studentID);
      if (student) {
        return `Average grade for ${student.name}: ${student.calculateAverage()}`;
      } else {
        return `Student with ID ${studentID} not found.`;
      }
    }
  }
  
  const studentManager = new StudentManager();
  
  const student1 = new RegularStudent('John Doe', 'S001');
  student1.addGrade(85);
  student1.addGrade(92);
  student1.addGrade(88);
  
  const student2 = new HonorsStudent('Jane Smith', 'S002');
  student2.addGrade(95);
  student2.addGrade(89);
  student2.addGrade(92);
  
  studentManager.addStudent(student1);
  studentManager.addStudent(student2);
  
  console.log(studentManager.viewAllStudents());
  
  console.log(studentManager.getStudentAverage('S001'));
  console.log(studentManager.getStudentAverage('S002'));
  