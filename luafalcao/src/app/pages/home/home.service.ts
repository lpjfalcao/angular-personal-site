import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ProjectsComponent } from "./components/projects/projects.component";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private httpClient: HttpClient){

    }

    async getAllProjects() {
        return await this.httpClient.get('https://ronremzc83.execute-api.us-west-1.amazonaws.com/dev/projects').toPromise();
    }
}

