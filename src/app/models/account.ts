export class Account{
    private username;
    private password;
    private email;

    constructor(username:string,password:string,email:string){
        this.username=username;
        this.password=password;
        if (email)
            {this.email=email};
    } 
}