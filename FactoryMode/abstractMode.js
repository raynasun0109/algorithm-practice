class Computer {
    code(){

    }
}

class Xiaomi_c extends Computer{
    code() {
    }
}

class Daier_c extends Computer{
    code() {
    }

}

class Phone {
    call(){

    }
}

class Xiaomi_p extends Phone{
    call() {
    }
}

class Daier_p extends Phone{
    call() {
    }

}

//-------------------------------------
//abstract factory
class CPFactory {
    createComputer(){

    }

    createPhone(){

    }
}

class XiaomiFactory extends CPFactory{
    creatComputer(){
        return new Xiaomi_c();
    }
    createPhone(){
        return new Xiaomi_p();
    }
}

class DaierFactory extends CPFactory{
    creatComputer(){
        return new Daier_c();

    }
    createPhone() {
        return new Daier_p();
    }
}

let xiaomi= new XiaomiFactory();
xiaomi.creatComputer().code();
xiaomi.createPhone().call();
