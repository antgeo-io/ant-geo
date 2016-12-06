"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var send_service_1 = require('../send-service/send.service');
var marker_service_1 = require('../marker-service/marker.service');
var lang_en_1 = require('../translate-lib/lang-en');
var lang_ru_1 = require('../translate-lib/lang-ru');
var MenuComponent = (function () {
    function MenuComponent(_sendService, _markerService) {
        this._sendService = _sendService;
        this._markerService = _markerService;
        this._sendFilteringArrayToComp = new core_1.EventEmitter(); // this output send filtering array to map comp
        this._sendEventReloadMap = new core_1.EventEmitter(); // this output call function in map component when add marker
        this._changeCursorMap = new core_1.EventEmitter();
        this.resolutionAddTag = false; // variable which allows open the modal windows
        this.MarkerDataForFilter = []; // Array which sending to filter
        this.finalFilterArray = []; // Array which will sent to map component
        this.data = {
            name: null,
            comment: null,
            coordinateX: null,
            coordinateY: null,
            time: null
        };
        var _this = this;
        _sendService.eventReloadMap.subscribe(function (value) { _this.sendEventReloadMap(value); });
    }
    MenuComponent.prototype.sendDataToFilter = function (e) {
        this.filteringArray(e, this.MarkerDataForFilter);
    };
    MenuComponent.prototype.sendFilteringArrayToComp = function (data) {
        this._sendFilteringArrayToComp.emit(data);
    };
    MenuComponent.prototype.sendEventReloadMap = function (data) {
        this._sendEventReloadMap.emit(data);
    };
    MenuComponent.prototype.filteringArray = function (args, data) {
        this.finalFilterArray.length = 0;
        var _this = this;
        return this.sendFilteringArrayToComp(data.filter(function (item) {
            var nameLower = item.name.toLowerCase();
            var argumentLower = args.toLowerCase();
            if (argumentLower.length >= 2 && nameLower.indexOf(argumentLower) + 1) {
                return _this.finalFilterArray.push(item);
            }
            else { }
        }));
    };
    MenuComponent.prototype.bootstrapDataForSend = function (data) {
        this._sendService.send(data); //a function which sends data to the server
    };
    MenuComponent.prototype.modalAddTag = function (bool) {
        this.resolutionAddTag = bool;
        this._changeCursorMap.emit(bool);
    };
    MenuComponent.prototype.modalHelp = function () {
        $('#modalHelp').modal('show');
    };
    MenuComponent.prototype.modalContact = function () {
        $('#modalContact').modal('show');
    };
    MenuComponent.prototype.takeCoor = function (e) {
        console.log(e);
        var _this = this;
        if (this.resolutionAddTag) {
            $('#modalAddTag').modal({
                onHide: function () {
                    _this.modalAddTag(false);
                }
            }).modal('show');
            _this.data.coordinateX = e.lat;
            _this.data.coordinateY = e.lng;
            _this.data.time = _this.setDate();
        }
    };
    MenuComponent.prototype.setDate = function () {
        var date = new Date();
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        return date.toLocaleString("en-US", options);
    };
    MenuComponent.prototype.changeLang = function (data) {
        console.log(data);
        if (lang_en_1.lang_en_name == data) {
            this.translateLibrary = lang_en_1.lang_en_trans;
        }
        else {
            this.translateLibrary = lang_ru_1.lang_ru_trans;
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getMarkerJsons = this._markerService.getMarker() // taking array with marker
            .subscribe(function (response) { _this.MarkerDataForFilter = response; });
        $('.ui.dropdown').dropdown();
        this.changeLang('en');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "_sendFilteringArrayToComp", void 0);
    __decorate([
        // this output send filtering array to map comp
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "_sendEventReloadMap", void 0);
    __decorate([
        // this output call function in map component when add marker
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "_changeCursorMap", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [send_service_1.SendService, marker_service_1.MarkerService],
            selector: 'my-menu',
            templateUrl: './menu.component.html'
        }), 
        __metadata('design:paramtypes', [send_service_1.SendService, marker_service_1.MarkerService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map