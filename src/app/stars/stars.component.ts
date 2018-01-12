import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  private stats:Array<boolean>;
  @Input()
  private rating:number;
  constructor() { }

  ngOnInit() {
    this.stats = [];
    for (let i=1;i<=5;i++){
      this.stats.push(i >this.rating);
    }

  }

}
