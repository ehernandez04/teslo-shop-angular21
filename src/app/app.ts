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

  x = 10; // ← Variable mal nombrada (debería ser "quantity" o algo claro)
  y = 20; // ← Variable mal nombrada

  // Sin comentarios explicativos
  doSomething() {
    const result = this.x + this.y * 2 - 5;
    console.log(result);
  }

  handleClick() {
    console.log('click');
  }
}
