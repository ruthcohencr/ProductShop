import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'חנות לרהיטי ילדים';
  previewPage: string = null;
  currentPage = 'HomePage';

  onNotifyPageChanges(page: string): void {
  //   // debugger;
  //   alert("In notify page changes");
    this.previewPage = this.currentPage;
    this.currentPage = page;

  }
}
