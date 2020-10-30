import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ANIMALS } from '../mock/mock-animals';
import { Animal } from '../model/animal';
import { catchError, map, tap } from 'rxjs/operators';
import { ResultInterface } from '../model/resultInterface';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalsUrl = '/api/heroes';
  private singleAnimalUrl = '/api/get_thingy';

  localAnimal: Animal = {
    _id: "test",
    color: "Blue",
    weight: 34,
    height: 27
  };

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl)
      .pipe(
        catchError(this.handleError<Animal[]>('getAnimals', []))
      );
  }

  getSingleAnimal(): Observable<Animal> {
    this.http.get<ResultInterface>(this.singleAnimalUrl).subscribe(data => {
        console.log(data.result);
    });
    return of(this.localAnimal);
    // return this.http.get<ResultInterface>(this.singleAnimalUrl).pipe(

    //   // As HttpClient cares only about the structure, you still need to loop 
    //   // through the returned data and create a classes if you want the method to return
    //   // a list of SearchResult classes.
    //   // CustomResultInterface is your custom interface that carries only the structure of the response
    //   map(results => this.localAnimal)
    // ); 
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
