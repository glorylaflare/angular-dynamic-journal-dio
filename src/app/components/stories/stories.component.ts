import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @Input()
  cover:string = "";
  @Input()
  title:string = "";
  @Input()
  description:string= "";
  @Input()
  authorPhoto:string= "";
  @Input()
  authorName:string= "";
  @Input()
  date:string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
