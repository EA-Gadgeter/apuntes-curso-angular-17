import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  public lastRemovedHero: string | undefined;

  RemoveLastHero(): void {
    this.lastRemovedHero = this.heroNames.pop();
  }
}
