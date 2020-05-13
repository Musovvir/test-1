import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-container5',
  templateUrl: './container5.component.html',
  styleUrls: ['./container5.component.css']
})
export class Container5Component implements OnInit {

  constructor(private service: StoreTestService) { }

  database4 = this.service.database4;

  ngOnInit(): void {
  }

}
