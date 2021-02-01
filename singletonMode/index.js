

function Demo (){
    Demo.unique=this;
    if (Demo.unique!==undefined){
        return Demo.unique;
    }
    this.name="name"
}

class Demo1 {
    constructor(){
        this.name="name"
    }

    static getInstance(){
        if (!this.instance){
            this.instance=new Demo1();
        }
        return this.instance;
    }
}
