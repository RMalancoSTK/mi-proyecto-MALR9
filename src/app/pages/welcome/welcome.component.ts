import { WelcomeService } from './welcome.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '../../entities/unicorns/interfaces/data';
import { MatTableDataSource } from '@angular/material/table';
import { Unicorns } from 'src/app/entities/unicorns/interfaces/unicorns';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit{
  constructor(private welcomeService: WelcomeService){}
longText = `Hola, mi nombre es MARTÍN ALBERTO LAPIZCO RUIZ, mi IS es MALR9. Tengo 24 años y vivo en Ciudad Obregón.`;
displayedColumns = ['name', 'age', 'is', 'city', 'state'];
dataSource: Data[] = [];

  ngOnInit(): void {
    this.welcomeService.getData().subscribe(data => {
      if (data.my_data) {
        this.dataSource = data.my_data;
        // this.dataSource = data.my_data;

        console.log("Datos:", this.dataSource);      
      }
    })
  }
}
