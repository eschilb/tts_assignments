function sayHello(person: string): string {
  return "Hello, "+person;
}

var user = "Super Student";

document.getElementById('para').innerHTML = sayHello(user);
