import { Component } from '@angular/core';



interface Card {
  title: string;
  description: string;
  uploadedFile?: File;
}

@Component({
  selector: 'app-uploadfilefasetwo',
  templateUrl: './uploadfilefasetwo.component.html',
  styleUrls: ['./uploadfilefasetwo.component.css']
})
export class UploadfilefasetwoComponent {

  title = 'FASE II PRACTICAS ACADÉMICAS';
  
  description = 'En esta fase se debe diligenciar los siguientes anexos:';
  description2 = 'Para subir los anexos debe dar clic en el botón "Seleccionar archivo" y seleccionar el archivo correspondiente.';
  description3 = 'Anexos requeridos para la practica académica';
  cards: Card[] = [
    { title: 'PROTOCOLO', description: 'PROTOCOLO DE ORIENTACION PARA ELABORACION DE PLAN DE TRABAJO' },
    { title: 'EVALUACIÓN', description: 'EVALUACION PARA LOS INFORMES FASE II' },
    { title: 'FORMATO SEGUIMIENTO', description: 'FORMATO SEGUIMIENTO PRACTICAS ACADEMICAS FASE II' },
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
