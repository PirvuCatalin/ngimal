import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/service/animal.service';
import { ANIMALS } from '../../mock/mock-animals';
import { Animal } from '../../model/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];

  animal: Animal = {
    color: '',
    weight: null,
    height: null
  };

  constructor(private animalService: AnimalService) { 
  }

  ngOnInit(): void {
    // this.animalService.getAnimals().subscribe(animals => {
    //   this.animals = animals;
    // });
    this.animalService.getSingleAnimal().subscribe(animal => {
      this.animal = animal;
    });
  }

}
