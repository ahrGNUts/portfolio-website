import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService]
})
export class AppComponent {
  title = 'portfolio-site';
}
