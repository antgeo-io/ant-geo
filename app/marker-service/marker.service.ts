import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MarkerService {
  constructor(private http: Http) {
    this.http = http;
  }

  url = 'https://api.mongolab.com/api/1/databases/ant_map_test/collections/tasks?apiKey=qC0p98Z69-yRKg7gn7T0Nul0VPIrbyw9';
  //'https://api.mongolab.com/api/1/databases/ant_map/collections/tasks?apiKey=qC0p98Z69-yRKg7gn7T0Nul0VPIrbyw9';

  getMarker() {
    return this.http.get(this.url)
               .map(res => res.json())
  }
}
