// Import todo model
let session = require('express-session');
let Apartment = require('../models/ApartmentClass');
let Room = require('../models/Room');
let apartment = new Apartment();


exports.apartmentList = function (req, res) {
    if(req.session.roomList === null) {
        req.session.roomList = apartment.roomList;
     }
    
    res.render('listApartment_view.ejs', {romeList : apartment.roomList,total : apartment.totalArea});
};


exports.apartmentAdd = function (req, res) {
    res.render('newApartment_view.ejs', {romeList : apartment.roomList});
};

exports.apartmentnew = function(req,res){
    let room = new Room(req.body.name,req.body.lenght,req.body.width);
    room.GetArea();
    apartment.roomList.push(room);
    apartment.GetTotalArea();
    res.render('newApartment_view.ejs', {romeList : apartment.roomList});
};

