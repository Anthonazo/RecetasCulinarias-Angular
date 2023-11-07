import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InterfaceRecipeComponent } from './interface-recipe/interface-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecetasComponent } from './component/recetas/recetas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InterfaceRecipeComponent,
    ViewRecipeComponent,
    RecetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
