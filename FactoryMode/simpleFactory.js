class Product{
    init(){
        console.log("how to make")
    }
}

class Hanbao extends Product{
    init(){
        console.log("Make burger")
    }
}

class Jitui extends Product{
    init(){
        console.log("Make chicken leg")
    }
}

class Factory{

    //do not need "new" to call the function
    //static cannot be inherited
    static getProduct(name){
        switch (name) {
            case "haobeo":
                return new Hanbao();
                break;
            case "jitui":
                return new Jitui();
                break;
            default:
                throw new Error("Product doesnt exist");
                break;
        }
    }
}

Factory.getProduct("haobao").init();
