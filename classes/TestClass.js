/**
 * Created by user on 5/5/2018.
 */
export  default class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get getName(){
        return this.name
    }
    get getAge(){
        return this.age;
    }
}