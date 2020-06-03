import { Component, OnInit } from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Home', icon: 'pi pi-fw pi-times',  routerLink: ['/']
        },
        {
            label: 'Estados primeng',  routerLink: ['/estados_primeng']
        },
        {
            label: 'Cidades primeng', routerLink: ['/cidades_primeng']
        },    
        {
            label: 'Pessoa', routerLink: ['/pessoas']
        },
        {
            label: 'Tab_Cest', routerLink: ['/tab_cests']
        },   
    ];
}
}