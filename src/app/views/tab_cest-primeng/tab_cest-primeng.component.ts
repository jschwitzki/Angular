import { Component, OnInit } from '@angular/core';
import { Tab_Cest } from 'src/app/services/tab_cest';
import { Tab_CestService } from 'src/app/services/tab_cest-service';



@Component({
  selector: 'app-tab_cest-primeng',
  templateUrl: './tab_cest-primeng.component.html',
  styleUrls: ['./tab_cest-primeng.component.css']
})
export class Tab_CestPrimengComponent implements OnInit {
  tab_cests: Tab_Cest[] = new Array();  
  

  constructor(private tab_cestsService: Tab_CestService) { }

  ngOnInit() {
      this.tab_cestsService.list().subscribe(response => this.tab_cests = response)
      
  }
}
