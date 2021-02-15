import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BlogPostsService} from '../../services/blog-posts.service';

@Component({
  selector: 'app-blogposts',
  template: `
    <br>
    <div *ngIf="error" class="alert alert-danger" role="alert">
      <div>{{ error }}</div>
    </div>
    <div class="card">
      <div class="card-header">Table of blogposts</div>
      <div class="card-body">
        <table class="table table-hover" *ngIf="blogposts.length">
          <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor='let blogpost of blogposts'>
            <td><a [routerLink]="['/products', blogpost.id]" [state]="{blogpost: blogpost}">{{ blogpost.title }}</a></td>
            <td>{{ blogpost.text }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class BlogpostsComponent implements OnInit {
  blogposts = [];
  error = ``;

  constructor(private productService: BlogPostsService, private router: Router) {
    this.error = this.router.getCurrentNavigation()?.extras.state?.error;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      result => {
        console.log(result);
        this.blogposts = result;
      },
      err => {
        switch (err.status) {
          case 0:
            this.error = `Failed to connect to: ` + err.url + ` with ` + err.statusText + `. Check connection to the server`;
            break;
          default:
            this.error = `Error: ` + err.message;
        }
      }
    );
  }
}
