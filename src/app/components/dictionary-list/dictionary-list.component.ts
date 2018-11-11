import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Word } from './../../models/word';


import * as words from '../../../assets/words.json';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  words: Word[];

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => this.words = data, error => console.log(error));
  }

  ngOnInit() {
    this.words = words;
  }

  // private getJSON(): Observable<any> {
  //   return this.http.get('assets/file.json')
  //                   .map((res: any) => res.json())
  //                   .catch((error: any) => error);
  // }

}
