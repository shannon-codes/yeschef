import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient,
  ) { }

getRecipes(keyword:string): Observable<any>{
  let apiURL = `https://api.spoonacular.com/recipes/complexSearch?query=${keyword}&addRecipeNutrition=true&sort=popularity&number=8&apiKey=e291bfb8f94a4d8d9778a9fef339d564`;
  return this.http.get<any>(apiURL).pipe(map(res=>{
    return res.results;
  }));
}

}
