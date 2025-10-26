class Student
{
    constructor(name){
      this.name = name;
      this.grades = [];
    }

    addGrade(grade){
      this.grades.push(grade);
    }

    average(){
      if(this.grades.length === 0){
        return 0;
      }
      let sum = 0;
      for(let i = 0; i < this.grades.length; i++){
         sum += this.grades[i];
      }
      return sum / this.grades.length;
    }
}

const res = new Student("Mery");

res.addGrade(87);
res.addGrade(92);
res.addGrade(82);

console.log(`${res.name}'s average grade is`, res.average());
