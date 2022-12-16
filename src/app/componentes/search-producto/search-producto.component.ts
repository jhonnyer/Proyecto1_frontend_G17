import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-producto',
  templateUrl: './search-producto.component.html',
  styleUrls: ['./search-producto.component.css']
})
export class SearchProductoComponent implements OnInit{

  @Output('search') searchEmitter=new EventEmitter<string>();
  search= new FormControl('');

  public value:string;

  constructor(){ 
    this.value="";
  }
  ngOnInit() {
    console.log(this.search);
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      if(value!=null){
        this.value=value;
      }
      this.searchEmitter.emit(this.value);
    })
  }


  
}
