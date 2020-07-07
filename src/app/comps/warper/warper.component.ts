import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ServService } from 'src/app/s/serv.service';

@Component({
  selector: 'app-warper',
  templateUrl: './warper.component.html',
  styleUrls: ['./warper.component.css']
})
export class WarperComponent implements OnInit ,AfterViewChecked{
  x:number
  image:string=""
  
  
  constructor(public s:ServService) { 
    this.s.counter=5
    
  }
  ngAfterViewChecked(): void {
    console.log(this.image);
    // throw new Error("Method not implemented.");
  }
  data=this.s.a
  ngOnInit(): void {
   
  }
  

}
