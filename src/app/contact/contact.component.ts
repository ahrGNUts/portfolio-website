import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      let $message = $('#message');
      var charCount = 0;

      $message.on('input', () => {
        charCount = $message.val().length;
        $('#charCounter').html(charCount + '/2000');
      });
    });
  }

}
