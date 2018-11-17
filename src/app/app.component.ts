import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PZWeb';

  teste(){
    alert("helllow");
  }



  items: MenuItem[];
  gOnInit() {
    this.items = [
        {
            label: 'File',
            icon: 'pi pi-pw pi-file',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                        {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                    ]
                },
                {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                {separator: true},
                {label: 'Quit', icon: 'pi pi-fw pi-times'}
            ]
        }];
  }
  
}

