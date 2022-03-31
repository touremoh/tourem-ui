import {Component, OnInit} from '@angular/core';
import {ResponseData} from "./model/ResponseData";
import {HttpClient} from "@angular/common/http";
import {Article} from "./model/Article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: Article[] | undefined ;
  menuOpened = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  findArticles(): void {
    this.http.get<ResponseData>("https://tourem-test.herokuapp.com/api/articles", {responseType: "json"}).subscribe(res => {
      console.log(res);
      this.articles = res.data.content;
    });
  }

  onMenuEventReceived(event: string) {
    this.menuOpened = !this.menuOpened;
  }
}
