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

  quantity = 10; // ← Variable mal nombrada (debería ser "quantity" o algo claro)
  price = 20; // ← Variable mal nombrada

  // Sin comentarios explicativos
  doSomething() {
    const result = this.quantity + this.price * 2 - 5;
    console.log(`Total calculado: ${result}`);
  }

  handleClick() {
    this.doSomething();
  }
}
