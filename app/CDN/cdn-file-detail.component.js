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
var cdn_file_1 = require('./cdn-file');
var CDNFileDetailComponent = (function () {
    function CDNFileDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cdn_file_1.CDNFile)
    ], CDNFileDetailComponent.prototype, "cdnfile", void 0);
    CDNFileDetailComponent = __decorate([
        core_1.Component({
            selector: 'cdn-file-detail',
            template: "\n  <div *ngIf=\"cdnfile\">\n    <h2>{{cdnfile.name}} details!</h2>\n    <div><label>id: </label>{{cdnfile.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"cdnfile.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], CDNFileDetailComponent);
    return CDNFileDetailComponent;
}());
exports.CDNFileDetailComponent = CDNFileDetailComponent;
//# sourceMappingURL=cdn-file-detail.component.js.map