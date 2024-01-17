import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  availableCurrency = ["USD",'GPB'];
  constructor(private activateRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((query: Params) => {
      let currency =  query['currency'].toUpperCase()
      if(this.availableCurrency.includes(currency))
      {

      }
    });
  }
}
