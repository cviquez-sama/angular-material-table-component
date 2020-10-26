


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {Lesson} from "../model/lesson";
import {CoursesService} from "./courses.service";
import {catchError, finalize} from "rxjs/operators";


// Data source is pass to the data table 
// When the table initialized it calls the connect method. 
// connect method will subscribe the observable 
export class LessonsDataSource implements DataSource<Lesson> {

    //Emit data from the data source
    // Initial emitted value []
    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    // Lessons data source needs the service to load BE data
    constructor(private coursesService: CoursesService) {

    }

    // This method triggers the loading of a new page
    loadLessons(courseId:number,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        //Call to the service
        this.coursesService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(lessons => this.lessonsSubject.next(lessons));

    }

    //Returns an observable of a given type
    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    //When the component is destroy this method unsubscribe the subscriptions
    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}

