import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  @ContentChild('admin') admin!:TemplateRef<any> 

  constructor() { }

  ngOnInit(): void {
  }

}
