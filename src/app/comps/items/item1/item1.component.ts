import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  @Input() param1:string
 
try:string
  
  constructor() { 
   
  }
  

  ngOnInit(): void {
    console.log("a");
    console.log(this.param1);
    
    
  }
  toggleSelected(){
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
