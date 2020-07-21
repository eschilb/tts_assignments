// function sayHello(person: string): string {
//   return "Hello, "+person;
// }
//
// var user = "Super Student";
//
// document.getElementById('para').innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, certs, hours) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
        this.certs = certs;
    }
    //implementation
    Person.prototype.getPerson = function (firstName, lastName, paramThree, paramFour) {
        var person;
        if (typeof paramFour == 'undefined') {
            if (typeof paramThree == 'number') {
                //overload 2
                return this.person = person;
            }
            else {
                //overload 4
                return person;
            }
        }
        else if (typeof paramThree == 'number') {
            //overload 1
            return person;
        }
        else {
            //overload 3
            return person;
        }
        return person;
    };
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.namePhLoc = function () {
        return this.firstName + " " + this.lastName + " " + this.phoneNumber + " " + this.state;
    };
    Person.prototype.nameAgeOcc = function () {
        return this.firstName + " " + this.age + " " + this.occupation;
    };
    Person.prototype.details = function () {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.phoneNumber + " " + this.state + " " + this.zipCode + " " + this.occupation + " " + this.hourlyWage + " " + this.hours;
    };
    Person.prototype.weeklyWage = function () {
        return this.hourlyWage * this.hours;
    };
    Person.prototype.addCerts = function () {
        var addCerts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            addCerts[_i] = arguments[_i];
        }
        for (var i in addCerts) {
            this.certs.push(addCerts[i]);
        }
        return this.certs;
    };
    return Person;
}());
var annie = new Person("Annie", "Green", 30, 1112223333, "Nebraska", 00000, "Dog Walker", 15, ["PhD", "MVP", "MFA", "CIA"], 35);
var dean = new Person("Dean", "Green", 20, 4445556666, "South Dakota", 11111, "Grocer", 10, ["MBA", "NFL"]);
var rich = new Person("Richy", "Rich", 25, 5556667777, "Washington", 22222, "Investor", 500, ["IRS"]);
document.getElementById('details').innerHTML = annie.details();
document.getElementById('deets').innerHTML = dean.details();
document.getElementById('deanWage').innerHTML = dean.fullName() + " " + dean.weeklyWage();
document.getElementById('annieAddCerts').innerHTML = annie.fullName() + " " + annie.addCerts("Java", "Vanilla JS", "Angular");
document.getElementById('rich').innerHTML = rich.getPerson("Richy", "Rich", 25);
