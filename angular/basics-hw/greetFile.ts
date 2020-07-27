// function sayHello(person: string): string {
//   return "Hello, "+person;
// }
//
// var user = "Super Student";
//
// document.getElementById('para').innerHTML = sayHello(user);

class Person
{
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    state: string;
    zipCode: number;
    occupation: string;
    hourlyWage: number;
    hours: number;
    certs: string[];

    constructor(firstName: string, lastName: string, age: number, phoneNumber: number, state: string, zipCode: number, occupation: string, hourlyWage: number, certs: string[], hours?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if ( hours ) {
          this.hours = hours;
        } else {
          this.hours = 40;
        }
        this.certs = certs;
    }


    fullName(): string{
      return this.firstName + " " + this.lastName;
    }

    namePhLoc(): string{
      return this.firstName + " " + this.lastName + " " + this.phoneNumber + " " + this.state;
    }

    nameAgeOcc(): string{
      return this.firstName + " " + this.age + " " + this.occupation;
    }

    details(): string{
      return this.firstName + " " + this.lastName + " " + this.age + " " + this.phoneNumber + " " + this.state + " " + this.zipCode + " " + this.occupation + " " + this.hourlyWage + " " + this.hours;
    }

    weeklyWage(): number{
          return this.hourlyWage * this.hours;
    }

    addCerts(...addCerts: string[]): string[] {
        for (let i in addCerts) {
          this.certs.push(addCerts[i]);
        }
        return this.certs;
    }

    createPerson(options: PersonOptions): {firstName: string; lastName: string; age: number; phoneNumber: number; state: string; zipCode: number; occupation: string; hourlyWage: number} {
      let newPerson = {firstName: "", lastName: "", age: null, phoneNumber: null, state: "", zipCode: null, occupation: "", hourlyWage: null}
      newPerson.firstName = options.firstName;
      newPerson.lastName = options.lastName;
      if (options.age) {
        newPerson.age = options.age;
      }
      if (options.phoneNumber) {
        newPerson.phoneNumber = options.phoneNumber;
      }
      if (options.state) {
        newPerson.state = options.state;
      }
      if (options.zipCode) {
        newPerson.zipCode = options.zipCode;
      }
      if (options.occupation) {
        newPerson.occupation = options.occupation;
      }
      if (options.hourlyWage) {
        newPerson.hourlyWage = options.hourlyWage;
      }
      return newPerson;
    }

}

interface PersonOptions
{
    firstName: string;
    lastName: string;
    age?; number;
    phoneNumber?: number;
    state?: string;
    zipCode?: number;
    occupation?: string;
    hourlyWage?: number;
    hours?: number;
    certs?: string[];
}

var annie = new Person("Annie", "Green", 30, 1112223333, "Nebraska", 00000, "Dog Walker", 15, ["PhD", "MVP", "MFA", "CIA"], 35);

var dean = new Person("Dean", "Green", 20, 4445556666, "South Dakota", 11111, "Grocer", 10, ["MBA", "NFL"]);

var rich = new Person("Richy", "Rich", 25, 5556667777, "Washington", 22222, "Investor", 500, ["IRS"]);

document.getElementById('details').innerHTML = annie.details();

document.getElementById('deets').innerHTML = dean.details();

document.getElementById('deanWage').innerHTML =  dean.fullName() + " " + dean.weeklyWage();

document.getElementById('annieAddCerts').innerHTML =  annie.fullName() + " " + annie.addCerts("Java", "Vanilla JS", "Angular");

// document.getElementById('rich').innerHTML = rich.getPerson("Richy", "Rich", 25);
