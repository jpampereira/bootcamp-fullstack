import { Component, Input, OnChanges } from "@angular/core";

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges { // quando houver alguma alteracao
	@Input()
	raiting: number = 0;
	
	starWidth: number = 0;

	ngOnChanges(): void {
		this.starWidth = this.raiting * 74 / 5;
	}
}