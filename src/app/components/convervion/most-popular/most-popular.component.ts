import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
  mostPopularCurrencies= ["USD" , "EUR" , "JPY" , "GBP" , "CNY" , "AUD" , "CAD" , "CHF" , "HKD" , "SGD"]
  constructor()
  {

  }
  
  ngOnInit(): void {
    
  }
}
