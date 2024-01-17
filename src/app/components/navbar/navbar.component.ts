import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { fixerApiKey } from 'src/app/constants/keys';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data:any
  constructor(private router: Router)
  {

  }
  ngOnInit(): void {
    
  }
  navigateToDetailsPage(currency:any)
  {
    this.router.navigate(['/details/'+currency])
  }
}
