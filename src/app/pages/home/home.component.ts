import { Component, OnInit } from '@angular/core';
import { AwesomeService } from 'src/app/services/awesome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private awesomeService: AwesomeService) { }

  awesomes$ = this.awesomeService.getAwesomes();

}
