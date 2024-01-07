import { Component } from '@angular/core';

@Component({
  selector: 'app-faseinitial',
  templateUrl: './faseinitial.component.html',
  styleUrls: ['./faseinitial.component.css']
})
export class FaseinitialComponent {

  cards = [
    { title: 'ANEXO A', description: 'FORMATO SOLICITUD INICIO O INSCRIPCION DE LA PRACTICA' },
    { title: 'ANEXO B', description: 'CARTA DE PRESENTACIÓN Y/O AVAL DEL ESTUDIANTE' },
    { title: 'ANEXO C', description: 'CARTA DEL RESPRESENTANTE DE LA EMPRESA O GERENTE TI ENVIADA AL COMITE DE INVESTIGACION DEL PROGRAMA' },
    { title: 'ANEXO D', description: 'FORMATO IDENTIFICACIÓN DE EMPRESAS ' },
    { title: 'ANEXO E', description: 'FORMARO ARL DILIGENCIADO SI LA ENTIDAD ASUME ARL O NO' },
 
  ];

  downloadPDF(title: string): void {
    // Implement the PDF download logic here based on the card title
    console.log(`Downloading PDF for ${title}`);
  }
}
