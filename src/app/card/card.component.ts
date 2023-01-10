import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  hasbulla: Hero = {
    imageUrl:
      'https://media4.giphy.com/media/jKsbw1hlnM5auWtzEw/200.gif?cid=6c09b952x9g34c2r4h9chq26bcape3x8dbsu1s9elrgv9eou&rid=200.gif&ct=g',
    title: 'Hasbulla',
    age: 21,
    description: '',
    testAffiche: true,
    onGetHasbulled(): void {this.testAffiche === true ?  this.testAffiche = false : this.testAffiche = true },
  };
}
