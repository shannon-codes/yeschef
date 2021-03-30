import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) { }

  sub: any;

  query = 'chicken';

  recipes:any;

  ngOnInit(): void {

    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.query = params['q'] || '';
      this.recipes=this.recipesService.getRecipes(this.query);
      //this.recipes = this.fetchRecipes(this.query);
    });

  }


  onSubmit(){

    this.router.navigate(['/search'], { queryParams: { q: this.query }});
  }

  fetchRecipes(keyword:string){
    this.recipes=this.recipesService.getRecipes(keyword);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
