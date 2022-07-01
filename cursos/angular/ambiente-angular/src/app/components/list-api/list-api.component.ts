import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

export type Character = {
  image: string;
  name: string;
  gender: string;
  species: string;
  status: string;
}

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})

export class ListApiComponent implements OnInit {
  characters: Character[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.characters = result.results;
    })
  }
}
