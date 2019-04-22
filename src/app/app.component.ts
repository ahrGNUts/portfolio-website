import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { AlertService } from './services/alert.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService, AlertService]
})
export class AppComponent {
  title = 'portfolio-site';
}
