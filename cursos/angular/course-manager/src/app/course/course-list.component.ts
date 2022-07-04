import { Component, OnInit } from "@angular/core";
import { Course } from './course'
import { CourseService } from "./course.service";

@Component ({
	templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit { // metodos de ciclo de vida - OnInit = momento de carregamento do componente
	_courses: Course[] = [];
	_filterBy: string = '';
	_filteredCourses: Course[] = [];

	constructor(private courseService: CourseService) { }

	ngOnInit(): void {
		this.retrieveAll()
	}

	retrieveAll(): void {
		this.courseService.retrieveAll().subscribe({
			next: courses => this._courses = courses,
			error: err => console.log(`Error: ${err}`),
			complete: () => this._filteredCourses = this._courses
		});
	}

	deleteById(id: number): void {
		this.courseService.deleteById(id).subscribe({
			next: () => console.log('Deleted with success'),
			error: err => console.log(`Error: ${err}`),
			complete: () => this.retrieveAll()
		})
	}

	set filter(value: string) {
		this._filterBy = value;

		this._filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
	}

	get filter() {
		return this._filterBy;
	}
}