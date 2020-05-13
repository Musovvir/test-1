import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-container4',
  templateUrl: './container4.component.html',
  styleUrls: ['./container4.component.css']
})
export class Container4Component implements OnInit {

  constructor(private service: StoreTestService) { }

  database3 = this.service.database3;

  ngOnInit(): void {
  }

}
