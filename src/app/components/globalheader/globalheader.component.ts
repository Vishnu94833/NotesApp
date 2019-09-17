import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-globalheader',
  templateUrl: './globalheader.component.html',
  styleUrls: ['./globalheader.component.scss']
})
export class GlobalheaderComponent implements OnInit {

  private isDisplayNavBar : boolean = true;
  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    if(this.route.url.includes('login') || this.route.url.includes('register')){
      this.isDisplayNavBar = false
    }
  }

}
