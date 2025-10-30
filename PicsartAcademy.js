class PicsartAcademy{
    constructor(){
        this.classroom = new Classroom;
        this.library = new Library;
        this.kitchen = new Kitchen;
    }
    showInfo(){
        console.log("This academy has a classroom, a library, and a kitchen.");
        console.log("- Classroom");
        console.log("- Library");
        console.log("- Kitchen");
    }
}

class Classroom{
    constructor(room_number = 1, list_of_students = []){
        this.room_number = room_number;
        this.list_of_students = list_of_students;
    }

    addStudent(name){
        this.list_of_students.push(name);
    }

    listStudents(){
        for(let i = 0; i < this.list_of_students.length; i++){
           console.log(this.list_of_students[i]);
        }
    }
}

class Library{
    constructor(books = []){
        this.books = books;
    }

    addBook(title, author){
        this.books.push({ title: title, author: author });
    }

    listBooks(){
        this.books.forEach(book => console.log(`${book.title} by ${book.author}`));

    }
}

class Kitchen{
    constructor(staff = []){
        this.staff = staff;
    }

    addWorker(name){
        this.staff.push(name);
    }

    listWorkers(){
        for(let i = 0; i < this.staff.length; i++){
           console.log(this.staff[i]);  //or this.staff.forEach(name => console.log(name));

        }
    }
}

const res = new PicsartAcademy();
res.classroom.addStudent("Alice");
res.classroom.addStudent("Bob");

res.library.addBook("JavaScript", "Flanagan");
res.library.addBook("OOA & Design", "Grady Booch");

res.kitchen.addWorker("Poxos");
res.kitchen.addWorker("Petros");

res.showInfo();

console.log("\nStudents:");
res.classroom.listStudents();

console.log("\nBooks:");
res.library.listBooks();

console.log("\nKitchen Staff:");
res.kitchen.listWorkers();
