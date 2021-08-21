import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() enter: EventEmitter<string> = new EventEmitter();
  @Output() debounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  // subject es un observable
  debouncer: Subject<string> = new Subject();
  query: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.debounce.emit(value);
    });
  }

  search(): void {
    this.enter.emit(this.query);
  }

  keyPressed() {
    // next para enviar el sgte valor
    this.debouncer.next(this.query);
  }
}
