import { Component, OnInit } from '@angular/core';
import { Tab_Cest } from 'src/app/services/tab_cest';
import { Tab_CestService } from 'src/app/services/tab_cest-service';

@Component({
  selector: 'app-tab_cest',
  templateUrl: './tab_cest.component.html',
  styleUrls: ['./tab_cest.component.css']
})
export class Tab_CestComponent implements OnInit {
    public tab_cests: Tab_Cest[] = new Array();
  
  

  constructor(public tab_cestsService: Tab_CestService) { }

  ngOnInit() {
      this.tab_cestsService.list().subscribe(response => this.tab_cests = response)
      
  }

}
