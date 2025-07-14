import { Component } from '@angular/core';
import { CalcularAreaService } from '../services/calcular-area.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-quadrado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calcular-quadrado.component.html',
  styleUrl: './calcular-quadrado.component.css'
})
export class CalcularQuadradoComponent {
  largura: number = 0;
  altura: number = 0;
  resultado: number | null = null;

  constructor(private calcularAreaService: CalcularAreaService) {}

  calcular() {
    this.resultado = this.calcularAreaService.calcularAreaQuadrado(this.largura, this.altura);
  }
}
