import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../../services/router.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {

  urls = [
    {name:'Asosiy', url:''},
    {name:'Kompaniya haqida', url:'/about'},
    {name:'Portfolio', url:'/works'},
    {name:'Yangiliklar', url:'/news'},
    {name:'Aloqa', url:'/contacts'},
  ];
  constructor(private routerSer: RouterService) { }

  ngOnInit(): void {
  }

  onNavigate(u, i) {
    this.routerSer.setUrl(u.url);
  }

}
