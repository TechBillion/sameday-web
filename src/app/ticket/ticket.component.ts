import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/tickets.service';
import { FormGroup,FormControl, Validators } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers:[TicketService]
})
export class TicketComponent implements OnInit {

  selectedFile :File= null;
  constructor(private http:HttpClient) { }
  OrderId:any;
  Subject : any;
  MobileNo :any;
  Discription : any ;
  // File:any;
  result : any;
  ngOnInit(): void {
  }

  onFileSelect(event:any){

this.selectedFile =<File>event.target.files[0];


  }
  onUpload(){

    const filedata = new FormData();
    filedata.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post('https://localhost:44393/Ticket/UploadTktImg',filedata)
       .subscribe(res =>{

    console.log(res);

    })
  }


  Save(){
    let url = "https://localhost:44393/Ticket/SaveTicket"

this.http.post(url,{

  OrderId :this.OrderId,
  Subject:this.Subject,
  MobileNo:this.MobileNo,
  Discription:this.Discription,
  // File:this.File

}).toPromise().then((data:any )=> {

// console.log(data)
// console.log(JSON.stringify(data.json.OrderID.SMobileNo.SDiscription.SSubject ))
// this.result = JSON.stringify(data.json.OrderID.SMobileNo.SDiscription.SSubject )
// this.result = JSON.stringify( `${this.OrderId}  ${this.Subject}   ${this.MobileNo }  ${this.Discription} ${this.File}.` )
this.result = JSON.stringify( `${this.OrderId}  ${this.Subject}   ${this.MobileNo }  ${this.Discription}.` )


})

  }
}
