export default class HolbertonCourse {
    constructor(name, length, students){
        if (typeof name !== 'string') {
            throw new Error('name must be a string');
        }
        if (typeof length !== 'number') {
            throw new Error('length must be a number');
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new Error('students must be an array of strings');
          }
      
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name(){
        return this._name
    }

    set name(newName) {
        if (typeof newName !== 'string') {
          throw new Error('name must be a string');
        }
        this._name = newName;
     }
    
    get length() {
        return this._length;
     }
    
    set length(newLength) {
        if (typeof newLength !== 'number') {
          throw new Error('length must be a number');
        }
        this._length = newLength;
     }
    
    get students() {
        return this._students;
     }
    
    set students(newStudents) {
        if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
          throw new Error('students must be an array of strings');
        }
        this._students = newStudents;
     }
}
