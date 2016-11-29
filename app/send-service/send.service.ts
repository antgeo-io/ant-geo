import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SendService {
    constructor(private http: Http) {
        this.http = http;
    }

    public eventReloadMap = new Subject();

    url = 'https://api.mongolab.com/api/1/databases/ant_map_test/collections/tasks?apiKey=qC0p98Z69-yRKg7gn7T0Nul0VPIrbyw9';

    send(data) { // function which sends data to the server
        this.http.post(this.url, data)
            .subscribe(data => {
                console.log(data);
                this.eventReloadMap.next('someValue');
            });
    }
}
