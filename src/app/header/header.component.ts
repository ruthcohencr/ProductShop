import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  localCurrentPage:string= 'HomePage';

  @Output() notifyPageChanged: EventEmitter<string> =
  new EventEmitter<string>();
 
  onClick(page) {
    // debugger;
    this.notifyPageChanged.emit(page);
    this.localCurrentPage = page;
  }
}
