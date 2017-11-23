import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes : Recipe[] = [
      new Recipe('Baryani','Pakistani Dish','http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
