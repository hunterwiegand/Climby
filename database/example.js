module.exports = class Climb {
    constructor( name, grade, styleType, date, description, file) {
        this.name = name;
        this.grade = grade;
        this.styleType = styleType;
        this.date = date;
        this.description = description;
        this.file = file;
    };
}

//const exampleClimb = new Climb("Sparky", 4, "vert", "10/15/23", "This was my very first dyno");

//console.log(exampleClimb.name);
