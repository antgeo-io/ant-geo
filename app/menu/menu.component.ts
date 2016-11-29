import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SendService } from '../send-service/send.service';
import { MarkerService } from '../marker-service/marker.service';
declare var $: any; // I don't want to use Jquery :(

import { lang_en_trans, lang_en_name } from '../translate-lib/lang-en';
import { lang_ru_trans, lang_ru_name } from '../translate-lib/lang-ru';

@Component({
    moduleId: module.id,
    providers: [SendService, MarkerService],
    selector: 'my-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent {
    constructor(
        private _sendService: SendService,
        private _markerService: MarkerService
    ) {
      let _this = this;
      _sendService.eventReloadMap.subscribe(value => {_this.sendEventReloadMap(value)});
    }

    @Output() _sendFilteringArrayToComp = new EventEmitter(); // this output send filtering array to map comp
    @Output() _sendEventReloadMap = new EventEmitter(); // this output call function in map component when add marker
    @Output() _changeCursorMap = new EventEmitter();

    resolutionAddTag: boolean = false; // variable which allows open the modal windows
    MarkerDataForFilter: any[] = []; // Array which sending to filter
    finalFilterArray: any[] = []; // Array which will sent to map component

    public sendDataToFilter(e) { // sending array to filter function
        this.filteringArray(e, this.MarkerDataForFilter);
    }

    public sendFilteringArrayToComp(data) { // sending filtering array to map component
        this._sendFilteringArrayToComp.emit(data);
    }

    public sendEventReloadMap(data) { // When adding the marker, need to reload a function, which add markers on the map
      this._sendEventReloadMap.emit(data);
    }

    public filteringArray(args, data) { // filter function
        this.finalFilterArray.length = 0;
        let _this = this;
        return this.sendFilteringArrayToComp(
                  data.filter(item => {
                      let nameLower = item.name.toLowerCase();
                      let argumentLower = args.toLowerCase();
                      if (argumentLower.length >= 2 && nameLower.indexOf(argumentLower) + 1) {
                          return _this.finalFilterArray.push(item);
                      } else {}
                  }
            ));
    }

    public data = { // the data to send
        name: <string>null,
        comment: <string>null,
        coordinateX: <number>null,
        coordinateY: <number>null,
        time: <string>null
    }

    public bootstrapDataForSend(data: any[]) { // order function in the service
        this._sendService.send(data); //a function which sends data to the server
    }

    public modalAddTag(bool: boolean): void { //1 step, user click on the button "add tag", so allow open a modal window
        this.resolutionAddTag = bool;
        this._changeCursorMap.emit(bool)
    }

    public modalHelp() {
      $('#modalHelp').modal('show');
    }

    public modalContact() {
      $('#modalContact').modal('show');
    }

    public takeCoor(e): void { //2 step, user click on the map, and open modal window
        console.log(e);
        let _this = this;
        if (this.resolutionAddTag) {
            $('#modalAddTag').modal({ // open window
                onHide: function() { // callback close window
                    _this.modalAddTag(false);
                }
            }).modal('show');
            _this.data.coordinateX = e.lat;
            _this.data.coordinateY = e.lng;
            _this.data.time = _this.setDate();
        }
    }

    public setDate() { // this function return the date
        let date = new Date();

        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        return date.toLocaleString("en-US", options);
    }

    translateLibrary;

    public changeLang(data) {
      console.log(data)
      if (lang_en_name == data) {
        this.translateLibrary = lang_en_trans;
      } else {
        this.translateLibrary = lang_ru_trans;
      }
    }

    ngOnInit() {
        var _this = this;
        var getMarkerJsons = this._markerService.getMarker() // taking array with marker
            .subscribe(function(response) { _this.MarkerDataForFilter = response; });
        $('.ui.dropdown').dropdown();
        this.changeLang('en');
    }
}
