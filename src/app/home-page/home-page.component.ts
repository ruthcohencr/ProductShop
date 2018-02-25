import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  @Input() page:string;
  constructor() { 
    this.page = 'HomePage';
  }

  onProductClicked(){
  }

}
