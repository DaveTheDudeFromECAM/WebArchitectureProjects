class Room {
    area;
    constructor(name, lenght, width){
    this.lenght = lenght;
    this.width = width;
    this.name = name;
    }

    GetArea(){
        this.area = this.lenght*this.width;
    }

    };
    
    module.exports = Room;
