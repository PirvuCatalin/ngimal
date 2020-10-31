import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ResultInterface } from '../model/resultInterface';
import { plainToClass } from 'class-transformer';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  private animalsUrl = '/api/heroes';
  private singleAnimalUrl = 'https://mysterious-reef.herokuapp.com/get_thingy';

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl)
      .pipe(
        catchError(this.handleError<Animal[]>('getAnimals', []))
      );
  }

  

  getSingleAnimal(): Observable<Animal> {
    return this.http.get<ResultInterface>(this.singleAnimalUrl).pipe(
        map(results => plainToClass(Animal, results.result as Object))
      );
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
