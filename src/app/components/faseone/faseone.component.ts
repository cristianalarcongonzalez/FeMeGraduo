import { Component } from '@angular/core';

@Component({
  selector: 'app-faseone',
  templateUrl: './faseone.component.html',
  styleUrls: ['./faseone.component.css']
})
export class FaseoneComponent {

  title = 'FASE I PRACTICAS ACADÉMICAS';
  
  description = 'En esta fase se debe diligenciar los siguientes anexos:';
  description2 = 'Para descargar los anexos, haga clic en el botón de descarga correspondiente a cada anexo.';
  description3 = 'Anexos requeridos para la practica académica';
  cards = [
    { title: 'PROTOCOLO', description: 'PROTOCOLO DE ORIENTACIÓN PRA LA ELABORACIÓN DEL PLAN DE TRABAJO' },
    { title: 'EVALUACIÓN', description: 'EVALUACIÓN PARA LOS INFORMES DE FASE I' },
    { title: 'FORMATO SEGUIMIENTO', description: 'FORMATO DE SEGUIMIENTO DE PRÁCTICAS FASE I Y II' },
  ];

  downloadPDF(title: string): void {
    // Implement the PDF download logic here based on the card title
    console.log(`Downloading PDF for ${title}`);
  }
}
