import {Injectable} from "@angular/core";
import {Article} from "../model/Article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../model/ResponseData";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  // base URL
  API_BASE_URL = "https://tourem-test.herokuapp.com/api";

  // constructor
  constructor(private http: HttpClient) {}

  // find all items
  findAll(): Observable<ResponseData> {
    return this.http.get<ResponseData>(this.API_BASE_URL + "/articles");
  }
}
