import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css'],
})
export class SyncComponent {
  constructor(private http: HttpClient) {}

  selectedFrequency: string = 'daily';
  selectedDate: string = '1';
  selectedTime: string = '1:00';
  isAutosyncEnabled: boolean = false;

  onToggle(event: any): void {
    if (event.checked) {
      this.isAutosyncEnabled = true;
    } else {
      this.isAutosyncEnabled = false;
    }
  }

  onStartAutoSync() {
    const [HOURS_OF_SELECTEDTIME, MINUTES_OF_SELECTEDTIME] =
      this.selectedTime.split(':');
    const HOURS = parseInt(HOURS_OF_SELECTEDTIME);
    const MINUTES = parseInt(MINUTES_OF_SELECTEDTIME);
    const DAY = parseInt(this.selectedDate);

    const BODY: { range: string; day?: number; hour: number; minute: number } =
      {
        range: this.selectedFrequency,
        day: DAY,
        hour: HOURS,
        minute: MINUTES,
      };

    if (this.selectedFrequency === 'daily') {
      delete BODY.day;
    }

    this.http
      .put(
        'https://9z291t1z-8386.inc1.devtunnels.ms/app/scheduler/activateScheduler',
        BODY
      )
      .subscribe((response) => {
        alert(response);
      });
  }
}
