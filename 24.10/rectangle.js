class Rectangle
{
    constructor(width, height){
      this.width = width;
      this.height = height;
    }

    area(){
      return this.width * this.height;
    }

    perimeter(){
      return 2 * (this.width + this.height);
    }
}

    const obj = new Rectangle(3, 4);

    console.log("Area is ", obj.area());
    console.log("Perimeter is ", obj.perimeter());    
