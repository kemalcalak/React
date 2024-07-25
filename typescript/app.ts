// Data Annotation

// let age: number = 29;
// let firstname: string = "Ali Kemal";
// let lastname: string = "Çalak";
// let isUpdated: boolean = true;

// function display(id: any, name: string) {
//     console.log("Id = " + id + ", Name = " + name);
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Number-String-Boolean

// let first: number = 123; // number
// let second: number = 0x37CF;  // hexadecimal
// let third: number = 0o377;      // octal
// let fourth: number = 0b111001;// binary

// console.log(first);  // 123
// console.log(second); // 14287
// console.log(third);  // 255
// console.log(fourth); // 57

// let employeefirstName: string = 'Ali Kemal Çalak';

// let employeefirstName: string = "Ali Kemal Çalak";
// console.log(employeefirstName);

// let employeeName: string = "John Smith";
// let employeeDept: string = "Finance";

// // Pre-ES6
// let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department.";

// // Post-ES6
// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;
// console.log(employeeDesc1);
// console.log(employeeDesc2);

// let isPresent: boolean = false;

// console.log(isPresent);

// ----------------------------------------------------------------------------------------------------------------------------

// Array

// let firstNames: string[] = ['Ali', 'Tuba', 'Merve'];
// // let firstNames: Array<string> = ['Ali', 'Tuba', 'Merve'];
// console.log(firstNames);

// let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];

// let ids: Array<number>;
// ids = [23, 34, 100, 124, 44];

// // let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana',true];
// let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];

// let fruits: Array<string>;
// fruits = ['Apple', 'Orange', 'Banana'];

// // console.log(fruits[1]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // output: Apple Orange Banana
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Tuple

// let Id: number = 1;
// let instructorName: string = 'Ali';

// let instructor: [number, string] = [1, "Ali"];

// var user: [number, string, boolean, number, string];
// user = [1, "Steve", true, 20, "Admin"];

// console.log(instructor, user);

// let employee: [number, string][];
// employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
// console.log(employee);

// ------------------------------------------------------------------------------------------------------------------------------

// Object

// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// };

// let instrustor: Person;

// instrustor = {
//     firstName: 'Ali Kemal',
//     lastName: 'Çalak',
//     age: 29,
//     jobTitle: 'Software Engineer'
// }

// let person: {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// }

// person = {
//     firstName: 'Ali Kemal',
//     lastName: 'Çalak',
//     age: 29,
//     jobTitle: 'Software Engineer'
// }

// console.log(person);

// ----------------------------------------------------------------------------------------------------------------------------

// Enum

// enum Media {
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// };

// console.log(Media.Magazine);
// console.log(Media[3]);

// // enum PrintMedia {
// //     Newspaper = "NEWSPAPER",
// //     Newsletter = "NEWSLETTER",
// //     Magazine = "MAGAZINE",
// //     Book = "BOOK"
// // }

// // console.log(PrintMedia.Newsletter);
// // console.log(PrintMedia['Newspaper']);

// ----------------------------------------------------------------------------------------------------------------------------

// Union

// let code: string | number | boolean;

// // code = 1232;
// code = false;
// console.log(code);

// ----------------------------------------------------------------------------------------------------------------------------

// Any

// let someThing: any = "Hello";
// someThing = 45;
// someThing = true;
// someThing = {
//     firstName: 'Ali Kemal',
//     lastName: 'Çalak',
// }
// console.log(someThing);

// let arr: any[] = ["John", 212, true];
// console.log(arr);

// ----------------------------------------------------------------------------------------------------------------------------

// Void

// function sayHello(): void {
//     // let ali = "Ali";
//     console.log('Hi');
//     // return ali;
// }

// sayHello();

// ----------------------------------------------------------------------------------------------------------------------------

// Never

// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }

// throwError("Hata");

// let something: void = null;
// let nothing: never = null;

// ----------------------------------------------------------------------------------------------------------------------------

// Type Inference

// let sayac = 0;
// // let sayac:number = 0;
// console.log(typeof (sayac));

// // function increment(counter: number){
// //     return counter++;
// // }

// function increment(counter: number): number {
//     return counter++;
// }

// // let a ="some text";
// // let b = 123;
// // a=b;

// function sum(a: number, b: number) {
//     return a + b;
// }

// // let total:number = sum(10,15);
// let total: string = sum(10, 15);

// ----------------------------------------------------------------------------------------------------------------------------

// Type Assertion

// // let code: any = 123;

// // let empCode = <number>code;
// // console.log(typeof (empCode));

// interface Employee {
//     name: string,
//     code: number
// }

// let employee = <Employee>{};
// console.log(typeof (employee));
// employee.name = "Ali";
// console.log(employee);

// ----------------------------------------------------------------------------------------------------------------------------

// if-else ternary operator

// let x: number = 35;
// let y: number = 25;

// // if (x > y) {
// //     console.log("X Y den büyüktür");
// // }
// // else if (x < y) {
// //     console.log("X Y den küçüktür ");
// // }
// // else {
// //     console.log("X Y ye eşittir");

// // }

// x > y ? console.log("X Y den büyüktür") : console.log("X Y den kucultur veya esittir")

// ----------------------------------------------------------------------------------------------------------------------------

// Switch Case

// let day: number = 26;

// switch (day) {
//     case 0:
//         console.log("Pazar");
//         break;
//     case 1:
//         console.log("Pazartesi");
//         break;
//     case 2:
//         console.log("Salı");
//         break;
//     case 3:
//         console.log("Çarşamba");
//         break;
//     case 4:
//         console.log("Perşembe");
//         break;
//     case 5:
//         console.log("Cuma");
//         break;
//     case 6:
//         console.log("Cumartesi");
//         break;
//     default:
//         console.log("Böyle bir gün yok");
//         break;
// }

// ----------------------------------------------------------------------------------------------------------------------------

// For Loop

// for (let i = 0; i < 3; i++) {
//     console.log("İ degerim", i);
// }

// let arr = [10, 20, 30, 40];

// for (let item of arr) {
//     console.log(item);
// }

// let str = "Ali Kemal";

// for (let item in arr) {
//     console.log(item);
// }

// ----------------------------------------------------------------------------------------------------------------------------

// While Loop - Do While Loop - Break - Continue

// let counter = 0;

// while (counter < 5) {
//     if(counter == 1){
//         continue;
//     }
//     console.log(counter);
//     counter++;

//     if (counter == 3) {
//         break;
//     }
// }

// do {
//     console.log(counter);
//     counter++;
// } while (counter < 5);

// ----------------------------------------------------------------------------------------------------------------------------

// Functions

// // function add(a: number, b: number):number {
// //     return a + b;
// // }

// // let toplam = add(10, 20);

// // console.log(typeof (toplam));

// // function bastir() {
// //     console.log("Ali Kemal Çalak");
// //     return 35;
// // }

// // let degisken = bastir();
// // console.log(degisken);

// // function birlestir(ad: string, soyad: string): string {
// //     return ad + ' ' + soyad;
// // }

// // let degisken = birlestir("Ali Kemal", "Çalak");
// // console.log(degisken);

// function birlestir(ad: string, soyad: string = "Çalak"): string {
//     return ad + ' ' + soyad;
// }

// let degisken = birlestir("Ali Kemal", "Çalakkkk");
// console.log(degisken);

// ----------------------------------------------------------------------------------------------------------------------------

// Optional Parameters

// // function carpim(a: number, b: number, c?: number) {
// //     console.log(typeof (c));
// //     if (typeof c !== 'undefined') {
// //         return a * b * c;
// //     }

// //     return a * b;
// // }

// // let degisken = carpim(5, 10);
// // console.log(degisken);

// // function carpim(a: number, b: number): number {
// //     return a * b;
// // }

// let carpim = (a: number, b: number): number => {
//     return a * b;
// }
// // let carpim = (a: number, b: number): number => a * b;

// let degisken = carpim(4, 5);
// console.log(degisken);

// let bastir = () => {

//     console.log("Ali Kemal Çalak");
// }

// // let bastir = () console.log("Ali Kemal Çalak");

// bastir();

// ----------------------------------------------------------------------------------------------------------------------------

// Function Overloading

// // function add(a: number, b: number): number {
// //     return a + b;
// // }

// // let degisken = add(4, 5);
// // console.log(degisken);

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;

// function add(a: any, b: any): any {
//     return a + b;
// }

// let degisken = add(5, 9);
// console.log(degisken);

// ----------------------------------------------------------------------------------------------------------------------------

// Rest Parameters

// // function toplam(a: string, ...numbers: number[]): number {
// //     console.log(a);
// //     let total = 0;
// //     numbers.forEach((num) => total += num);
// //     return total;
// // }

// // console.log(toplam("Ali", 20, 30));

// function birlestir(message: string, ...names: string[]) {
//     console.log(message + " " + names.join(", "));
// }

// birlestir("Merhaba", "Ali", "Osman", "Tuba")

// ----------------------------------------------------------------------------------------------------------------------------

// Class

// class Person {
//     id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let kisibilgim = new Person(43, 'Ali Kemal', 'Çalak');
// console.log(kisibilgim);
// console.log(kisibilgim.getFullName());

// ----------------------------------------------------------------------------------------------------------------------------

// Access Modifiers

// class Person {
//     public id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let kisibilgim = new Person(43, 'Ali', 'Kemal');
// console.log(kisibilgim.id);

// ----------------------------------------------------------------------------------------------------------------------------

// Readonly

// class Person {
//     //Readonly ye class ın dışından erişebiliyorsunuz
//     //değerini bastırabiliyorsunuz fakat değeri değiştiremiyorsunuz
//     //private keyword ünde class ın dışından erişemiyorsunuz
//     readonly id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let kisibilgim = new Person(43, 'Ali', 'Kemal');
// kisibilgim.id = 5;

// console.log(kisibilgim.id);

// ----------------------------------------------------------------------------------------------------------------------------

// Inheritance

// class Person {

//     id: number;
//     firstName: string;
//     lastName: string;

//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// //Person parent Employee child class
// //super keywordü ile parent class ın constructor ını tetikliyorsun
// class Employee extends Person {
//     constructor(id: number,
//         firstName: string,
//         lastName: string) {
//         super(id, firstName, lastName)
//     }
// }

// let employee = new Employee(29, "Ali", "Kemal");
// console.log(employee.getFullName());

// // let kisibilgim = new Person(43, 'Ali', 'Kemal');
// // kisibilgim.id = 5;

// // console.log(kisibilgim.id);

// ----------------------------------------------------------------------------------------------------------------------------

// Static Method

// class Circle {
//     static pi: number = 3.14;
//     pi = 3;

//     constructor() {
//         this.pi++;
//         Circle.pi++;
//     }

//     static hesapla(yaricap: number) {
//         return this.pi * yaricap * yaricap;
//     }
// }

// let objem = new Circle();
// let objem2 = new Circle();

// console.log(objem.pi);

// console.log(Circle.pi);
// console.log(Circle.hesapla(5));

// ----------------------------------------------------------------------------------------------------------------------------

// Abstract Class

// abstract class Department {
//     constructor(public name: string) { }

//     printName(): void {
//         console.log("Department name: " + this.name);
//     }
//     abstract printMeeting(): void;

//     // abstract generateReports(): void;
// }

// //abstract classların tek başına new instance ını alamazsınız
// //fakat reference verebilirsiniz
// //abstract class içinde abstract metodları mutlaka extend ettiğiniz class ta implemente
// //etmeniz lazım

// class AccountingDepartment extends Department {
//     constructor() {
//         super("Accounting and Auditing");
//     }

//     printMeeting(): void {
//         console.log("The Accounting Department meets each Monday at 10am.");
//     }

//     generateReports(): void {
//         console.log("Generating accounting reports...");
//     }

// }

// let department: Department
// department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// // department.generateReports();

// ----------------------------------------------------------------------------------------------------------------------------

// Interface

// interface Person {
//     firstName: string,
//     lastName: string
// }

// function getFullName(person: Person) {
//     return `${person.firstName} ${person.lastName}`;
// }

// let person = {
//     firstName: 'Ali',
//     lastName: 'Kemal',
//     age: 20
// };

// console.log(getFullName(person));

// ----------------------------------------------------------------------------------------------------------------------------

// Interface - Optional Properties - Readonly Properties

// // interface Person {
// //     firstName: string,
// //     lastName: string,
// //     middleName?: string
// // }

// // function getFullName(person: Person) {
// //     if (person.middleName) {
// //         return `${person.firstName} ${person.middleName} ${person.lastName}`;
// //     }
// //     return `${person.firstName} ${person.lastName}`;
// // }

// // let person: Person = {
// //     firstName: 'Ali',
// //     lastName: 'Kemal'
// // };

// // // person.firstName = "ALİL";

// // console.log(getFullName(person));

// interface StringFormat {
//     (str: string, isUpper: boolean): string
// }

// let format: StringFormat;

// format = function (str: string, isUpper: boolean) {
//     return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// }

// console.log(format("Ali Kemal", true));

// ----------------------------------------------------------------------------------------------------------------------------

// Interface Extending

// // interface IPerson {
// //     name: string;
// //     gender: string;
// // }

// // interface IEmployee extends IPerson {
// //     empNumber: number;
// // }

// // interface IWorker extends IPerson {
// //     empDepartment: string;
// // }

// // let employee: IEmployee = {
// //     empNumber: 1,
// //     gender: 'Male',
// //     name: 'Ali'

// // }

// // let employeeDepartment: IWorker = {
// //     empDepartment: 'Software Department',
// //     gender: 'Male',
// //     name: 'Ali'

// // }

// // console.log(employee);
// // console.log(employeeDepartment);

// interface IPerson {
//     name: string;
//     gender: string;
// }

// class Employee implements IPerson {
//     empNumber: number;
//     name: string;
//     gender: string;
//     constructor(empNumber: number, name: string, gender: string) {
//         this.empNumber = empNumber;
//         this.name = name;
//         this.gender = gender;
//     }
// }

// let employee = new Employee(5, "Ali", "Male");
// console.log(employee);

// ----------------------------------------------------------------------------------------------------------------------------

// Type Intersection

// interface BusinessPartner {
//     name: string;
//     credit: number;
// }

// interface Identity {
//     name: string;
//     id: number;
// }

// interface Contact {
//     email: string;
//     phone: string;
// }

// type Employee = Identity & Contact;

// let kisim: Employee = {
//     id: 54,
//     name: "Ali Kemal",
//     email: "sdasd@hotmail.com",
//     phone: "345435345324"
// }

// console.log(kisim);

// type Customer = BusinessPartner & Contact;

// let musterim: Customer = {
//     credit: 2121,
//     email: "asdas@hotmail.com",
//     name: "Ali Kemal",
//     phone: "3423423324"
// }

// console.log(musterim);

// ----------------------------------------------------------------------------------------------------------------------------

// Type Guard

// type tip = string | number;

// function add(a: tip, b: tip) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }

//     if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b);
//     }

//     throw new Error('Lufen doğru formatta data gönderin');
// }

// console.log(add(5, "kemal"));

// class Customer {
//     isCreditAllowed(): boolean {
//         // ...
//         return true;
//     }
// }

// class Supplier {
//     isInShortList(): boolean {
//         // ...
//         return true;
//     }
// }

// type BusinessPartner = Customer | Supplier;

// function signContract(partner: BusinessPartner): string {
//     let message: string;
//     if (partner instanceof Customer) {
//         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
//     }

//     if (partner instanceof Supplier) {
//         message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
//     }

//     return message;
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Generics

// function getRandomNumber(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }

// let numbers = [1, 54, 65, 7, 8];
// // console.log(getRandomNumber(numbers));

// function getRandomString(items: string[]): string {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }

// let adlarim = ["Ali", "Tuba", "Merve"];
// // console.log(getRandomString(adlarim));

// // function getRandomElement(items: any[]): any {
// //     let randomIndex = Math.floor(Math.random() * items.length);
// //     return items[randomIndex];
// // }

// let degiskenlerim = [true, false, true];
// function getRandomElement<T>(items: T[]): T {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }
// console.log(getRandomElement<number>(numbers));
// console.log(getRandomElement<string>(adlarim));
// console.log(getRandomElement(degiskenlerim)); 

// ----------------------------------------------------------------------------------------------------------------------------

// Generic Constraints

// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }

// let person = merge(
//     { name: "Ali" },0
//     { age: 20 }
//     29 // hata verir çünkü object değil
// )

// console.log(person);

// ----------------------------------------------------------------------------------------------------------------------------

// Interface Generics

// // interface Months<U, V> {
// //     key: U,
// //     value: V
// // }

// // let month: Months<number, string> = {
// //     key: 1,
// //     value: 'January'
// // }

// // console.log(month);

// interface Collection<T> {
//     add(o: T): void;
//     remove(o: T): void;
// }

// class List<T> implements Collection<T>{
//     private items: T[] = [];
//     add(o: T): void {
//         this.items.push(o);
//         console.log(this.items);
//     }

//     remove(o: T): void {
//         let index = this.items.indexOf(o);
//         if (index > -1) {
//             this.items.splice(index, 1);
//         }
//     }
// }

// let list = new List<number>();

// for (let i = 0; i < 10; i++) {
//     list.add(i);
// }

// ----------------------------------------------------------------------------------------------------------------------------

// Class Generics

// class Stack<T> {
//     private elements: T[] = [];

//     constructor(private size: number) {
//     }
//     isEmpty(): boolean {
//         return this.elements.length === 0;
//     }
//     isFull(): boolean {
//         return this.elements.length === this.size;
//     }
//     push(element: T): void {
//         if (this.elements.length === this.size) {
//             throw new Error('The stack is overflow!');
//         }
//         this.elements.push(element);

//     }
//     pop(): T {
//         if (this.elements.length == 0) {
//             throw new Error('The stack is empty!');
//         }
//         return this.elements.pop();
//     }
// }

// function randBetween(low: number, high: number): number {
//     return Math.floor(Math.random() * (high - low + 1) + low);
// }

// let numbers = new Stack<number>(5);

// while (!numbers.isFull()) {
//     let n = randBetween(1, 10);
//     console.log(`Push ${n} into the stack.`)
//     numbers.push(n);
// }
// while (!numbers.isEmpty()) {
//     let n = numbers.pop();
//     console.log(`Pop ${n} from the stack.`);
// }

// ----------------------------------------------------------------------------------------------------------------------------