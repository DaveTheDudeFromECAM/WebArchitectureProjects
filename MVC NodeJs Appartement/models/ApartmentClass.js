class Apartment {
    roomList = new Array();
    totalArea = 0;
    constructor(){

    }
    GetTotalArea(){
        this.totalArea = 0;
        for (const element of this.roomList) { // You can use `let` instead of `const` if you like
            this.totalArea += element.area;
        }
    }
    };
    
    module.exports = Apartment;