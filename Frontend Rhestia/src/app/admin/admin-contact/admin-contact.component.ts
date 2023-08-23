import {Component, OnInit} from '@angular/core';
import {UtilisateurServiceService} from "../../core/services/utilisateur-service.service";
import {MessageService} from "../../core/services/message.service";

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit{
  Message=[
    {
      id: 1,
      name: "",
      email: "",
      message: "",
      createdAt:""
    },

  ]
  constructor(private listmessage :MessageService) { }

  ngOnInit(): void {

    this.listmessage.getMessages().subscribe((data:any)=>{
        this.Message=data;
        console.log(this.Message);
      }
    );
  }
}
