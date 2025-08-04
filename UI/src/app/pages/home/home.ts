import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  CommonModule,
  RouterModule, 
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  allPosts: any;
  
  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.allPosts = res; 
      },
      error: () => {
        this.snackBar.open("Something went wrong", "OK");
      }
    });
  }
}
