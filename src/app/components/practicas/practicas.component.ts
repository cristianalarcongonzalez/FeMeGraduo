import { Component } from '@angular/core';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent {


  cards = [
    { title: 'Anexo A', description: 'FORMATO SOLICITUD INICIO O INSCRIPCIÓN DE LA PRÁCTICA' },
    { title: 'Anexo B', description: 'CARTA DE PRESENTACIÓN Y/O AVAL DEL ESTUDIANTE-PRACTICAS ACADEMICAS' },
    { title: 'Anexo C', description: 'CARTA DEL REPRESENTANTE DE LA EMPRESA O GERENTE TI ENVIADA AL COMITÉ DE INVESTIGACIÓN DEL PROGRAMA' },
    { title: 'Anexo D', description: 'FORMATO IDENTIFICACIÓN DE EMPRESAS ' },
    { title: 'Anexo E', description: 'FORMATO ARL DILIGENCIADO SI LA ENTIDAD ASUME O NO LA ARL' }
  ];

  downloadPDF(title: string): void {
    // Implement the PDF download logic here based on the card title
    console.log(`Downloading PDF for ${title}`);
  }
}
