import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css']
})
export class Container2Component implements OnInit {

  constructor(private service: StoreTestService) { }

  database1 = this.service.database1;

  ngOnInit(): void {
  }

}
