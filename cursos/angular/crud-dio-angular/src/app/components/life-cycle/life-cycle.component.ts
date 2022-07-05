import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  @Input() number = 10;
  
  constructor() {
    console.log('Chamou o construtor');
  }

  ngOnChanges(): void {
    console.log('Chamou o ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Chamou o ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Chamou o ngDoCheck'); 
  }

  ngAfterContentInit(): void {
    console.log('Chamou o ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Chamou o ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('Chamou o ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Chamou o ngOnDestroy');
  }
}