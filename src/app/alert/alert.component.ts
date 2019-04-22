import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('clearMessage', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('* <=> *', [animate(500)])
    ])
  ]
})
export class AlertComponent implements OnInit, OnDestroy {
  alertSubscription = new Subscription();
  alert: string;
  alertStatus = 'hide';

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertSubscription = this.alertService.statusChanged
      .subscribe(
        (data: string) => {
          this.alert = data;
          this.alertStatus = 'show';
          console.log(this.alertStatus);

          setTimeout(() => {
            this.alertStatus = 'hide';
          }, 2000);
        }
      );
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }

}
