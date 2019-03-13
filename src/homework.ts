// 1. Создать функцию которая принимает число и считает факториал этого числа.

function factorial(number: number):number {
    let result: number = number;
    for (let i: number = result -1; i > 1; i--) {
        result *= i
    }
    return result
}

// 2. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
// multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(...numbers: number[]): number {
    if (numbers.length == 0) return 0;

    return numbers.reduce((a, b) => a * b);
}

// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str:string):string {
    return str.split('').reverse().join('');
}

// 4. Создать интерфейс Админа. 

interface AdminInterface {

    name: string;
    email: string;
    password: string;
    readonly type?: string;
    
}

class User implements AdminInterface {

    name: string;
    email: string;
    password: string;
    readonly type?: string;

    constructor(name:string, email:string, password:string, type:string = 'Admin') {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }

}

const newUser = new User('Svyatosav', 'litvinyk01@gmail.com', '1234567890');

// 5.Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) 
// а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).

abstract class Car {

    protected mileage: number;
    protected fuel: number;

    constructor(mileage:number = 0, fuel:number = 100) {
        this.mileage = mileage;
        this.fuel = fuel;
    }

    public abstract drive(number):void;
    public abstract refuel(number):void;
}

// 6.Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive (ехать) и refuel (заправка).
// Метод drive должен принимать количество километров и обновлять свойство mileage и уменьшать значение свойства fuel 
// если бензин закончился то нужно вернуть сообщение о том что нужно заправиться. Метод refuel должен увеличивать
// свойство fuel. Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.

class SettingsCar extends Car {
    
   public drive(mile:number):void {
        if(isNaN(mile))
            return console.log('Введите числовое значение!');
        if(this.fuel <= 0) 
            return console.log('Бензин закончился!');

        this.mileage += mile;
        this.fuel - 10;
    }

    public refuel():void {
        this.fuel = 100;
    }

    // 7.Создать публичный get для получения свойств fuel и mileage.
    public get viewFuel():number {
        return this.fuel
    }
    public get viewMileage():number {
        return this.mileage
    }

}

const myCar = new SettingsCar();



