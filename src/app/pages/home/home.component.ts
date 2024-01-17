import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fixerApiKey } from 'src/app/constants/keys';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  amountValue:any="";
  result?:number;
  selectedFromValue:any="EUR";
  selectedToValue:any="USD";
  showError:boolean=false;
  addRotateClass:boolean=false;
  allData:any;
  convertionData:any;
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.http.get("http://data.fixer.io/api/symbols?access_key="+fixerApiKey).subscribe(data =>{
      this.allData=data
    })
  }
  public enterAmount(e:any)
  {
    let value:string=e.target.value;
    let lastChar = value[value.length-1]; 
    if(!this.isNumber(lastChar))
    {
      e.target.value=value.slice(0, -1); 
      this.showError=true;
    }
    else
    {

      e.target.value=value.charAt(0)=='$' ? value : "$"+value;
      this.amountValue=e.target.value
      this.showError=false;
    }
    
    
    
  }
  public isNumber(char:any) {
    return /^\d$/.test(char);
  }
  selectedFrom()
  {
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
    },(err)=>{
    })
  }
  handleCovert()
  {
    const valueFrom = this.convertionData.rates[this.selectedFromValue]; 
    const valueTo = this.convertionData.rates[this.selectedToValue];
    const amount = +this.amountValue.substring(1)
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
  
}
