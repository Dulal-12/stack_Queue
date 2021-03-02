class stack {

    constructor(){
        this.top = -1;
        this.arr = [];
        this.max = 10;
    }

    push(element){
        this.top = this.top + 1;
        if(this.top < this.max){
            this.arr.push(element);
        }
        else{
            return -1;
        }
    }

    pop(){

        if(this.top >= 0){
            this.arr.pop();
            this.top = this.top - 1;
        }
        else{
            return -1;
        }
    }

    peek(){
        if(this.top >= 0){
            return this.top(this.arr[top]);
        }
    }

    isEmpty(){
        if(this.top >= 0){
            return false;
        }
        else{
            return true;
        }
    }

    isFull(){
        if(this.top <= this.max - 1){
            return true;
        }
        else{
            return false;
        }
    }
}