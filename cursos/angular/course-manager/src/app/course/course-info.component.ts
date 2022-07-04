import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
	templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {
	course: Course = {
		id: 0,
		name: '',
		price: 0,
		imageUrl: '',
		code: '',
		duration: 0,
		rating: 0,
		releaseDate: '',
		description: ''
	};

	constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

	ngOnInit(): void {
		this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
			next: course => this.course = course,
			error: err => console.log(`Error: ${err}`)
		});
	}

	save(): void {
		this.courseService.save(this.course).subscribe({
			next: res => console.log(res),
			error: err => console.log(`Error: ${err}`)
		});
	}
}