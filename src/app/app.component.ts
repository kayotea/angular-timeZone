import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  button_timezone = ['PST 0', 'MST 1', 'CST 2', 'EST 3', 'Clear 4'];
  button_colors = ['white', 'white', 'white', 'white', 'white'];
  datetime = this.formatDate(new Date(), 0);
  showdate = this.datetime;
  cleardate = false;
  switchBoard(idx){
    for (var i = 0; i < this.button_colors.length; i++){
      if (i == idx){
        this.button_colors[i] = 'yellow';
        if (i < 4) { //add 'i' hours to get time change (if button not 'Clear')
          this.showdate = this.formatDate(new Date(), i);
          this.cleardate = false; //show date
        }
        if (i == 4) { this.cleardate = true; }  //don't show date
      } else { this.button_colors[i] = 'white'; }
    }
  }

  //formats date into readable string
  formatDate(date, h){
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var hours = date.getHours() + h;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes:minutes;
    var strTime = hours+':'+minutes+ampm;
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex]+' '+day+', '+year+', '+strTime;
  }
}
