import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MarkerService } from '../marker-service/marker.service'; 
declare var L: any;
declare var markersCluster: any;

@Component({
    moduleId: module.id,
    providers: [MarkerService],
    selector: 'my-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent {
    constructor(private _markerService: MarkerService) {}

    @Output() eventMapComponent = new EventEmitter();

    arrayMarkers: any[] = []; // Start array markers
    globalDeclareVarForMapbox = L; // Global variable for mapbox
    globalMap = null; // Variable for mapbox
    markersCluster = new L.MarkerClusterGroup(); // Init cluster markers
    changeCursorVar: boolean; // The boolean which permits change cursor on the map

    public sendCoor(data) { // Sending coordinate for menu component
        this.eventMapComponent.emit(data);
    }

    public reloadMap(val) {
      this.getMarkerFunction();
    }

    public changeCursor(data: boolean) { // Take value for changeCursorVar variable
      this.changeCursorVar = data;
    }

    public takeFilteringArr(data) { // Gets filtering array and from nenu component
        if (data[0]) { // If filtering array have the markers, send his
            this.deleteLayerMap(data);
        } else { // Else send full array
            this.deleteLayerMap(this.arrayMarkers);
        }
    }

    private initMap() { // Init map
        let _this = this;

        const tokenForMap = 'pk.eyJ1IjoianNjb2RlciIsImEiOiJjaXE4Y2gweHIwM' +
            'DNuaHhuc3A5eWxkc25tIn0.Frbvg0IRwj__jG2Pz7-e5w'

        L.mapbox.accessToken = tokenForMap;
        this.globalMap = this.globalDeclareVarForMapbox.mapbox.map('map') //, 'mapbox.streets'
            .setView([20, 40], 2);

        this.getMarkerFunction();

        L.control.layers({
            'Streets': L.mapbox.tileLayer('mapbox.streets').addTo(_this.globalMap),
            'Satellite': L.mapbox.styleLayer('mapbox://styles/mapbox/satellite-streets-v9')
        }).addTo(_this.globalMap);

        this.globalMap.on('click', function(e) {
            _this.sendCoor(e.latlng);
        });
    }

    public getMarkerFunction () {
      this.globalMap.removeLayer(this.markersCluster);
      let _this = this;
      let getMarkerJson = this._markerService.getMarker() // Gets markers from service
          .subscribe(function(res) { console.log(res); _this.createMarkers(res); _this.arrayMarkers = res; });
    }

    public deleteLayerMap(data) {
        this.globalMap.removeLayer(this.markersCluster); // Delete the old array
        this.createMarkers(data); // Send data to create-markers function
    }

    public createMarkers(markers) { // Function which create markers on the map
        this.markersCluster = new L.MarkerClusterGroup();
        for (let i in markers) {
            let marker = L.marker([Number(markers[i].coordinateX), Number(markers[i].coordinateY)], {
                icon:
                L.divIcon({
                    className: 'lableClass',
                    html: `
                    <div class="labelClass_point">
                      <img src="../../assets/img/map-marker-1.png">
                    </div>
                    <div class="lableClass_label">
                      ${markers[i].name.split(' ')[0].slice(0, 1).toUpperCase() + '. ' + markers[i].name.split(' ')[1]}
                    </div>
                    `
                })
            });
            let customPopup = `
              <div class="labelClass_specie">
                ${markers[i].name}
              </div>
              <div class="labelClass_comment">
                ${markers[i].comment}
              </div>
              <hr class="labelClass_hr"/>
              <div class="labelClass_coor">
                ${markers[i].coordinateX}, ${markers[i].coordinateY}
              </div>
              <div class="labelClass_time">
                ${markers[i].time}
              </div>
              <div class="labelClass_clear"> </div>
            `
            marker.bindPopup(customPopup, {
                closeButton: false,
                minWidth: 320
            });
            this.markersCluster.addLayer(marker);
        }
        this.globalMap.addLayer(this.markersCluster);
    }

    ngOnInit() { // function init
        this.initMap();
    }
}
