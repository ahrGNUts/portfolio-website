import { Subject } from 'rxjs';

export class AlertService {
  successMessage = 'Your message has been sent! We will contact you shortly.';
  errorMessage = 'There was an issue sending your message. Please try again later.';
  statusChanged = new Subject<string>();

  onStatusChanged(data) {
    if (data === 'sent') {
      this.statusChanged.next(this.successMessage);
    } else {
      this.statusChanged.next(this.errorMessage);
    }
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  getSuccessMessage() {
    return this.successMessage;
  }
}
