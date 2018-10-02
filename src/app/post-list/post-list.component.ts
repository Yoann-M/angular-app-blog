import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postDescription: string

  constructor() { }

  ngOnInit() {
  }

  date = new Date()

  count = 0;
  loveIt() {
    this.count ++
  }
  dontLoveIt() {
    this.count --
  }

  getClass() {
    if(this.count > 0){
      return 'list-group-item-success'
    }else if(this.count < 0) {
      return 'list-group-item-danger'
    }
  }

}
