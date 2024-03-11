import { Observable } from 'rxjs';
import { Post, PostService } from './../../services/post.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  public ngOnInit(): void{
    this.posts$ = this.postService.getPosts()
  }

}