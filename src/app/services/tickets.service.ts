import {Injectable} from "@angular/core"; 
import {HttpClient} from "@angular/common/http"

@Injectable()


export class TicketService{


    constructor(private _http:HttpClient){}
    GetStudent()
    {

       return this._http.get("https://localhost:44393/Student/GetAll");
     

    }
}