import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.route.params.subscribe((res) => {
      if (res && res.id) {
        this.getArticle(res.id);
      }
    });
  }

  ngOnInit(): void {}

  getArticle(id) {
    this.articleService.getArticle(id).subscribe((res) => {
      this.article = res;
    });
  }
}
