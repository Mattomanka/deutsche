import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardComponent } from './components/card/card.component';

import { DataService } from './services/data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DictionaryListComponent } from './components/dictionary-list/dictionary-list.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'game', component: GameComponent },
    { path: 'dictionary', component: DictionaryListComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        HttpClientModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        GameComponent,
        NotFoundComponent,
        CardComponent,
        DictionaryListComponent,
    ],
    providers: [
        DataService,
        HttpClientModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
