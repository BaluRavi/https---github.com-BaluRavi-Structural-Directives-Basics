import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let color of colors; even as e">
      <h2>{{ e }} {{ color }}</h2>
    </div>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red</div>
      <div *ngSwitchCase="'green'">You picked green</div>
      <div *ngSwitchCase="'blue'">You picked blue</div>
      <div *ngSwitchDefault>Pls pick again</div>
    </div>

    <div *ngIf="canDisplay; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Angular is good for enterprises app</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>React is good to have skill</h2>
    </ng-template>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public colors = ['red', 'green', 'yellow', 'blue', 'brown'];

  public canDisplay = true;

  public color = 'red';
}
