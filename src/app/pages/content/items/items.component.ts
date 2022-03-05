import { Component, OnInit } from '@angular/core';
import {Article} from "../../../model/Article";
import {ItemsService} from "../../../services/ItemsService";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Article[] | undefined;
  itemsLoaded = false;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService
        .findAll()
        .subscribe(res => {
            if (res.status == 302) {
              this.items = res.data.content;
              this.itemsLoaded = true;
            }
        });
  }
}
