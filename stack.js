class stackFormula {

    constructor(){
       front = -1;
        arr = [];
        max= 10;
    }

    push(element){
       front =front + 1;
        if(front < max){
            arr.push(element);
        }
        else{
            return -1;
        }
    }

    pop(){

        if(front >= 0){
            arr.pop();
           front =front - 1;
        }
        else{
            return -1;
        }
    }

    peek(){
        if(front >= 0){
            returnfront(arr[top]);
        }
    }

    isEmpty(){
        if(front >= 0){
            return false;
        }
        else{
            return true;
        }
    }

    isFull(){
        if(front <= max- 1){
            return true;
        }
        else{
            return false;
        }
    }
}

push(2);
push(2);