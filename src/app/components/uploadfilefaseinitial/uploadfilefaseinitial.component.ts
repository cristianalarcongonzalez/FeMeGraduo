import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

interface Card {
  title: string;
  description: string;
  uploadedFile?: File;
}
@Component({
  selector: 'app-uploadfilefaseinitial',
  templateUrl: './uploadfilefaseinitial.component.html',
  styleUrls: ['./uploadfilefaseinitial.component.css']
})
export class UploadfilefaseinitialComponent {
  title = 'FASE AVAL PRACTICAS ACADÉMICAS';
  
  description = 'En esta fase se debe diligenciar los siguientes anexos:';
  description2 = 'Para subir los anexos debe dar clic en el botón "Seleccionar archivo" y seleccionar el archivo correspondiente.';
  description3 = 'Anexos requeridos para la practica académica';
 
  cards: Card[] = [
    { title: 'Anexo A', description: 'FORMATO SOLICITUD INICIO O INSCRIPCION DE LA PRACTICA' },
    { title: 'Anexo B', description: 'CARTA DE PRESENTACIÓN Y/O AVAL DEL ESTUDIANTE' },
    { title: 'Anexo C', description: 'CARTA DEL RESPRESENTANTE DE LA EMPRESA O GERENTE TI ENVIADA AL COMITE DE INVESTIGACION DEL PROGRAMA' },
    { title: 'Anexo D', description: 'FORMATO IDENTIFICACIÓN DE EMPRESAS' },
    { title: 'Anexo E', description: 'FORMARO ARL DILIGENCIADO SI LA ENTIDAD ASUME ARL O NO' }
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
