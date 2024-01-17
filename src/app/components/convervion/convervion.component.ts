import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fixerApiKey } from 'src/app/constants/keys';

@Component({
  selector: 'app-convervion',
  templateUrl: './convervion.component.html',
  styleUrls: ['./convervion.component.css']
})
export class ConvervionComponent {
  @Input() source?:string
  amountValue:any="";
  result?:number;
  selectedFromValue:any="EUR";
  selectedToValue:any="USD";
  showError:boolean=false;
  addRotateClass:boolean=false;
  allData:any;
  currencyFullName:string='';
  convertionData:any;
  constructor(private http:HttpClient,private router: Router)
  {

  }
  ngOnInit(): void {
    this.http.get("http://data.fixer.io/api/symbols?access_key="+fixerApiKey).subscribe((data:any) =>{
      this.allData=data
      if(this.source == 'details')
      {
        this.getFullCurrencyName();
      }
    },(err)=>{
    })
  }
  getFullCurrencyName()
  {
    let symbols = this.allData['symbols'];
    this.currencyFullName = symbols[this.selectedFromValue];
  }

  enterAmount(e:any)
  {
    let value:string=e.target.value;
    let lastChar = value[value.length-1]; 
    if(!this.isNumber(lastChar))
    {
      e.target.value=value.slice(0, -1); 
      this.amountValue=e.target.value
      this.showError=true;
    }
    else
    {

      this.amountValue=e.target.value
      this.showError=false;
    }
    
    
    
  }
  public isNumber(char:any) {
    return /^[0-9.]+$/.test(char);
  }
  selectedFrom()
  {
    this.getFullCurrencyName();
  }
  selectedTo()
  {
  }
  swapValues()
  {
    this.addRotateClass=!this.addRotateClass;
    const temp = this.selectedFromValue;
    this.selectedFromValue = this.selectedToValue;
    this.selectedToValue = temp;
    this.handleCovert();
  }
  convert()
  {
    let req = "http://data.fixer.io/api/latest?access_key="+fixerApiKey+"&base=EUR"+"&symbols="+this.selectedFromValue+","+this.selectedToValue
    this.http.get(req).subscribe((data:any) =>{
      this.convertionData =data
      this.handleCovert();
    },(err:any)=>{
    })
  }
  handleCovert()
  {
    const valueFrom = this.convertionData.rates[this.selectedFromValue]; 
    const valueTo = this.convertionData.rates[this.selectedToValue];
    const amount = +this.amountValue
    this.handleCurrencyConverion(valueFrom,valueTo,amount)
  }
  handleCurrencyConverion(valueFrom:any,valueTo:any,amount:number)
  {
    let convertaionRate ;
    if(valueFrom < valueTo)
    {
      convertaionRate = (valueTo/valueFrom).toFixed(2)
    }
    else
    {
      convertaionRate = (valueFrom/valueTo).toFixed(2)
    }
    this.calculateConfertion(valueFrom,valueTo,amount,+convertaionRate)
  }

  calculateConfertion(valueFrom:any,valueTo:any,amount:number,convertaionRate:number)
  {
    if(valueFrom < valueTo)
    {
      this.result=+(amount*convertaionRate).toFixed(2)
    }
    else
    {
      
      this.result=+(amount/convertaionRate).toFixed(2)
    }
  }
  navigateToHomePage()
  {
    this.router.navigate(['/home'])
  }
}
