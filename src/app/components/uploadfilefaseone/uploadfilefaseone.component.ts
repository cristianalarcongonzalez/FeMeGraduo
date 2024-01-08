import { Component } from '@angular/core';


interface Card {
  title: string;
  description: string;
  uploadedFile?: File;
}


@Component({
  selector: 'app-uploadfilefaseone',
  templateUrl: './uploadfilefaseone.component.html',
  styleUrls: ['./uploadfilefaseone.component.css']
})
export class UploadfilefaseoneComponent {
  title = 'FASE I PRACTICAS ACADÉMICAS';
  
  description = 'En esta fase se debe diligenciar los siguientes anexos:';
  description2 = 'Para subir los anexos debe dar clic en el botón "Seleccionar archivo" y seleccionar el archivo correspondiente.';
  description3 = 'Anexos requeridos para la practica académica';

  cards: Card[] = [
    { title: 'PROTOCOLO', description: 'PROTOCOLO DE ORIENTACION PARA ELABORACION DE PLAN DE TRABAJO' },
    { title: 'EVALUACIÓN', description: 'EVALUACION PARA LOS INFORMES FASE I' },
    { title: 'FORMATO SEGUIMIENTO', description: 'FORMATO SEGUIMIENTO PRACTICAS ACADEMICAS FASE I' },
  ];

  uploadPDF(event: any, title: string): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const cardIndex = this.cards.findIndex((card) => card.title === title);
      if (cardIndex !== -1) {
        this.cards[cardIndex].uploadedFile = file;
        console.log(`File uploaded for ${title}`);
      }
    }
}
}