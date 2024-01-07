import { Component } from '@angular/core';

@Component({
  selector: 'app-fasetwo',
  templateUrl: './fasetwo.component.html',
  styleUrls: ['./fasetwo.component.css']
})
export class FasetwoComponent {

  cards = [
    { title: 'PROTOCOLO', description: 'PROTOCOLO DE ORIENTACIÓN PRA LA ELABORACIÓN DEL PLAN DE TRABAJO' },
    { title: 'EVALUACIÓN', description: 'EVALUACIÓN PARA LOS INFORMES DE FASE II' },
    { title: 'FORMATO SEGUIMIENTO', description: 'FORMATO DE SEGUIMIENTO DE PRÁCTICAS FASE I Y II' },
  ];

  downloadPDF(title: string): void {
    // Implement the PDF download logic here based on the card title
    console.log(`Downloading PDF for ${title}`);
  }
}
