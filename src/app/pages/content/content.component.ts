import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infos } from '../../data/infos'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cover:string = ""
  title:string = ""
  authorName:string = ""
  authorPhoto:string = ""
  date:string = ""
  description:string = ""
  category:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = infos.filter(article => article.id == id)[0]

    this.cover = result.cover;
    this.title = result.title;
    this.description = result.description;
    this.authorPhoto = result.authorPhoto;
    this.authorName = result.authorName;
    this.date = result.date;
    this.category = result.category;
  }
}
