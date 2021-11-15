import { Component, OnInit } from '@angular/core';
import { MakingService } from 'src/app/making.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  public task: any = []

  constructor(private tskinfo:MakingService) { }

  ngOnInit(): void {
    this.task=this.tskinfo.gettask()
  }

}
