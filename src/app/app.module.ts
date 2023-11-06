import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InterfaceRecipeComponent } from './interface-recipe/interface-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecetasComponent } from './component/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InterfaceRecipeComponent,
    ViewRecipeComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
