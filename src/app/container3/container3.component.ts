import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-container3',
  templateUrl: './container3.component.html',
  styleUrls: ['./container3.component.css']
})
export class Container3Component implements OnInit {

  database2 = this.service.database2;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
