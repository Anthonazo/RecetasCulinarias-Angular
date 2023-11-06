import { Component, Input } from '@angular/core';
import { Receta } from 'src/app/domain/Receta';

@Component({
  
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  @Input() receta?: Receta;
}

