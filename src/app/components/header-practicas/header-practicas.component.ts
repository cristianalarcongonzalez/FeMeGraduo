import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { config } from 'src/config/config';

@Component({
  selector: 'app-header-practicas',
  templateUrl: './header-practicas.component.html',
  styleUrls: ['./header-practicas.component.css']
})
export class HeaderPracticasComponent {

  menuComponent = config.menuComponentsPracticas;
  currentDate: Date;


  constructor(private router:Router,
              private loginService: LoginService,
              private toastr: ToastrService) {
    this.currentDate = new Date();
  }

  navigateToComponent(url: string) {
    this.router.navigate([url]);
  }

  logOut(): void{ 
    this.loginService.removeLocalStorge();
    this.router.navigate(['/login']);
    this.toastr.warning('Gracias por utilizar nuestros servicios', 'Sesion finalizada');
  }

}
