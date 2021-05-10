import { lorem } from 'faker';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText: string = lorem.sentence();
  enteredText: string = '';

  onInput(value: any) {
    value = value.target.value;
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string):string {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
