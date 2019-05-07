import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private service: ServiceService) { }
  
  count2
  ngOnInit() {
    let that = this;
    this.service.sharedVar.subscribe(function (data) {
      console.log(data, "this is componet 2")
      that.count2 = data;
    })
  }
  
}
