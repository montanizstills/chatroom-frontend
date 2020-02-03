export class Message{

    id;
    message;

    constructor(id,message){
        this.id=id;
        this.message=message;
    }

    getMessage():string{
        return this.message;
    }

    get modifiedMessage(){
        return this.message+"abc"
    }


    // public setMessage(newMessage){
    //     this.message=newMessage
    // }

    // public setId(id){
    //     this.id=id;
    // }
}