import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent implements OnInit {
  public articles: any[] = null;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getListe();
  }

  getListe() {
    this.articleService.getArticlesListe().subscribe((res: any) => {
      this.articles = res;
    });
  }
}
