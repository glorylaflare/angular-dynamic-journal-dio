import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infos } from '../../data/infos'

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
  @Input()
  id:string="";

  constructor() { }

  ngOnInit(): void {
  }

  // constructor(
  //   private route:ActivatedRoute
  // ) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe( value =>
  //     this.id = value.get("id")
  //   )
  // }

  // setValuesToComponent(id:string | null){
  //   const result = infos.filter(article => article.id == id)[0]
      
  //   this.cover = result.cover;
  //   this.title = result.title;
  //   this.description = result.description;
  //   this.authorPhoto = result.authorPhoto;
  //   this.authorName = result.authorName;
  //   this.date = result.date;
  // }
}
