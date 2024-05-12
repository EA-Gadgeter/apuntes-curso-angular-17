import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name = "ironman";
  public age = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  GetHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  ChangeHero(): void {
    this.name = "spiderman";
  }

  ChangeAge(): void {
    this.age = 21;
  }

  Reset() {
    this.age = 45;
    this.name = "ironman"
  }
}
