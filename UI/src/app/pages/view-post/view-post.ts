import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-post',
  standalone: true,
  templateUrl: './view-post.html',
  styleUrls: ['./view-post.css'],
  imports: [ 
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatInputModule,
  DatePipe,
  CommonModule,
  ]
})
export class ViewPost implements OnInit {
  postId: string = '';
  postData: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log(this.postId);
    this.getPostById();
  }
getPostById() {
  this.postService.getPostById(Number(this.postId)).subscribe({
    next: (res) => {
      this.postData = res;
      console.log(res);
    },
    error: () => {
      this.matSnackBar.open("Something went wrong!!!", "OK");
    }
  });
}
}
