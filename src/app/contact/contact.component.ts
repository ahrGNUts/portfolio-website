import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contactForm: NgForm;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

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

  onSubmit(form: NgForm) {

  }

}
