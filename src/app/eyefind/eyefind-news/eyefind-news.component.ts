import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eyefind-news',
  templateUrl: './eyefind-news.component.html',
  styleUrls: ['./eyefind-news.component.css']
})
export class EyefindNewsComponent implements OnInit {
  public title: string;
  public author: string;
  public site: any = {};
  public content: string;

  constructor() { }

  ngOnInit() {

    this.title = 'Automotive stocks in turmoil after exec killed.';
    this.author = 'Leslie Gardner';
    this.site.name = 'Weazel News';
    this.site.logo = 'weazel_news_logo.png';
    // tslint:disable-next-line:max-line-length
    this.content = 'In more sad news for big business, visionary venture capitalist Isaac Penny has been murdered just as he was about to save the US automotive industry by taking a controlling stake in Vapid Motor Company. How many more business leaders need to die before President Lawton stands up and calls these assassinations an act of terror?';

  }

}
