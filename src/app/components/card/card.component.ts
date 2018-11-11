import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    word: word;

    constructor( private dataService: DataService ) {}

    ngOnInit() {
        this.dataService.getJSON().subscribe(data => {
            console.log(data);
        });
    }

}

// tslint:disable-next-line:class-name
interface word {
    artikel: string;
    word: string;
    plural: string;
    translation: string;
    description: string;
}
