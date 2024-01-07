import { Component } from '@angular/core';

@Component({
  selector: 'app-faseinitial',
  templateUrl: './faseinitial.component.html',
  styleUrls: ['./faseinitial.component.css']
})
export class FaseinitialComponent {

  title = 'FASE INICIAL AVAL PRACTICAS ACADÉMICAS';
  
  description = 'En esta fase se debe diligenciar los siguientes anexos:';
  description2 = 'Para descargar los anexos, haga clic en el botón de descarga correspondiente a cada anexo.';
  description3 = 'Anexos requeridos para la practica académica';
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
