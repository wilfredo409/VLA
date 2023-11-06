
import { Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders}from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {





  ngOnInit(): void {
    
  }

  pestanaActiva: string = 'pestana1';

cambiarPestana(pestana:string){

  this.pestanaActiva = pestana;
}


}

