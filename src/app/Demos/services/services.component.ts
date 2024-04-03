import {Component, OnInit} from '@angular/core';
import {ChildComponent} from "../inout/child/child.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "./message.service";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    ChildComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  title: string = 'Demos des services en Angular';

  message!: string;
  newMessage!: string;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.message = this.messageService.getMessage()
  }

  setNewMessage() {
    this.messageService.setMessage(this.newMessage)
    this.message = this.messageService.getMessage()
  }
}
