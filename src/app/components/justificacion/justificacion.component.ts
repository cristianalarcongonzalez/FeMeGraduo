import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from 'src/config/config';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.css']
})
export class JustificacionComponent {
  tittle3 = "3. PLANTEAMIENTO Y FORMULACION DEL PROBLEMA";
  tittle4 = "4. JUSTIFICACIÓN";
  planteamientoForm: FormGroup;
  justificacionForm: FormGroup;
  
  tableComponent: { nombre: string }[] = [
    { nombre: "Nombre estudiante" },
    { nombre: "Identificación" },
    { nombre: "Número" },
    { nombre: "Programa Académico" },
    { nombre: "N° Creditos Aprobados" },
    { nombre: "% Créditos probados" },
    { nombre: "Correo electrónico" },
    { nombre: "Teléfono" },
    { nombre: "Celular" },
    { nombre: " " },
  ];
  

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.planteamientoForm = this.formBuilder.group({
      planteamiento: ['', [Validators.required]],
    });
    this.justificacionForm = this.formBuilder.group({
      justificacion: ['', [Validators.required]],
    });

    this.generateTestData();
  }


students: any[] = [];
generateTestData() {
  this.students = [
    {
      nombre: "Brahayan David Betancur Carrillo",
      identificacionTipo: "Cédula",
      nIdentificacion: "123456789",
      programaAcademico: "Ingeniería de Software",
      nCreditosAprobados: 120,
      porcentajeCreditosAprobados: 80,
      correoElectronico: "johndoe@example.com",
      telefono: "1234567890",
      celular: "9876543210",
    },
    {
      nombre: "Jane Mane Neigthware Postre",
      identificacionTipo: "Pasaporte",
      nIdentificacion: "987654321",
      programaAcademico: "Ingeniería de Sistemas",
      nCreditosAprobados: 150,
      porcentajeCreditosAprobados: 90,
      correoElectronico: "janesmith@example.com",
      telefono: "9876543210",
      celular: "1234567890",
    },
    {
      nombre: "Jane Mane Neigthware Postre",
      identificacionTipo: "Pasaporte",
      nIdentificacion: "987654321",
      programaAcademico: "Ingeniería Electrónica",
      nCreditosAprobados: 150,
      porcentajeCreditosAprobados: 90,
      correoElectronico: "janesmith@example.com",
      telefono: "9876543210",
      celular: "1234567890",
    },
    {
      nombre: "Jane Mane Neigthware Postre",
      identificacionTipo: "Pasaporte",
      nIdentificacion: "987654321",
      programaAcademico: "Ingeniería Ambiental",
      nCreditosAprobados: 150,
      porcentajeCreditosAprobados: 90,
      correoElectronico: "janesmith@example.com",
      telefono: "9876543210",
      celular: "1234567890",
    },
    {
      nombre: "Jane Mane Neigthware Postre",
      identificacionTipo: "Pasaporte",
      nIdentificacion: "987654321",
      programaAcademico: "Ingniería de Sistemas",
      nCreditosAprobados: 150,
      porcentajeCreditosAprobados: 90,
      correoElectronico: "janesmith@example.com",
      telefono: "9876543210",
      celular: "1234567890",
    },
  ];
}

selectedStudent: any;

onStudentSelection(student: any) {
  this.selectedStudent = student;
}


removeSelectedStudent() {
  if (this.selectedStudent) {
    const index = this.students.indexOf(this.selectedStudent);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
    this.selectedStudent = null; // Limpiar la selección después de eliminar
  }
}



planteamientoFormSave() {
  if (this.planteamientoForm.invalid) {
    return;
  }
  console.log(this.planteamientoForm.value);
  this.router.navigate(['inf-espcifica']);
}

specificInfoSave() {
  if (this.planteamientoForm.invalid) {
    return;
  }
  console.log(this.planteamientoForm.value);
  this.router.navigate(['inf-espcifica']);
}

openAddUsersModal() {
  this.router.navigate(['/inf-general_addUsers']);
} 
  

}
