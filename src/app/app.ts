import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly title = signal('teslo-shop');

  // Variable que nunca se usa ← SONARQUBE LO DETECTARÁ
  unusedVariable = 'esto nunca se usa';

  // Comentario obvio ← SONARQUBE LO DETECTARÁ
  // Este es un comentario

  handleClick() {
    console.log('click');
  }
}
