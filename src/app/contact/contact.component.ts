import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { ConnectionService } from '../services/connection.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contactForm: NgForm;
  messageType = 'empty';

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private connService: ConnectionService,
              private alertService: AlertService) { }

  ngOnInit() {
    $(document).ready(() => {
      const $message = $('#message');
      const $submit = $('#contactSubmit');
      const $charCounter = $('#charCounter');
      let charCount = 0;

      $message.on('input', () => {
        charCount = $message.val().length;
        $charCounter.html(charCount + '/2000');
      });

      $submit.on('click', () => {
        charCount = 0;
        $charCounter.html(charCount + '/2000');
      });
    });
  }

  onSubmit() {
    this.formData.name = this.contactForm.value.name;
    this.formData.email = this.contactForm.value.email;
    this.formData.message = this.contactForm.value.message;
    this.contactForm.reset();

    this.connService.sendMessageData(this.formData)
      .subscribe(
        (data) => {
          console.log(data);
          this.alertService.onStatusChanged(data);
          console.log('sent triggered');
        },
        (error) => {
          console.log('error:');
          console.log(error);
          console.log('error triggered');
          this.alertService.onStatusChanged(error);
        }
      );
  }

}
