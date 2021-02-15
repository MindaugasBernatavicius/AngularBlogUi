import { TestBed } from '@angular/core/testing';
import {BlogpostsService} from './blog-posts.service';

describe('BlogPostsService', () => {
  let service: BlogpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
