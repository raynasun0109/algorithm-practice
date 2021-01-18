//solve the factory cannot be inherited issue
//符合开闭幕原则

class Computer {
    code(){

    }
}

class Xiaomi extends Computer{
    code() {
    }
}

class Daier extends Computer{
    code() {
    }

}

class Factory {
    creatComputer(){

    }

}

class XiaomiFactory extends Factory{
    creatComputer(){
        return new Xiaomi();
    }
}
class DaierFactory extends Factory{
    creatComputer(){
        return new Daier();

    }
}

let xiaomi= new XiaomiFactory();
xiaomi.creatComputer().code();
