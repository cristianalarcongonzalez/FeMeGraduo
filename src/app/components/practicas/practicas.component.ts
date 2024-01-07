import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent {


  @Input() phase: { phaseName: string; state: string };

  getCardClass(state: string): string {
    switch (state) {
      case 'aprobado':
        return 'approved';
      case 'rechazado':
        return 'rejected';
      case 'en revision':
        return 'in-review';
      case 'pendiente por revisar':
        return 'pending-review';
      default:
        return '';
    }
  }
}
