import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'game', component: GameComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        GameComponent,
        NotFoundComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
