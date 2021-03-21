class stack {

    constructor() {
        this.index = -1;
        this.size = 2;
        this.arr = [];
    }

    push(number) {

        this.index += 1;
        if(this.index <= this.size){
            this.arr.push(number);
            console.log(this.arr)
        }
        return -1;
    }

    pop() {
        
        if(this.index >= 0){
            this.index -= 1;
           this.arr.pop();
        }
        return -1;
    }

    peek() {
        if (this.index >= 0) {
            return arr[index];
        }
    }

    isEmpty() {
        if (this.index >= 0) {
            return false;
        }
        else {
            return true;
        }
    }

    isFull() {
        if (this.index === size) {
            return true;
        }
        else {
            return false;
        }
    }
}

const obj = new stack();
obj.push(3);
obj.push(3);
obj.push(3);
console.log(obj.push(3))
console.log(obj.push(3))
