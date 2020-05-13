import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DETAILS } from '../shared/studentsData';
let DashboardComponent = class DashboardComponent {
    constructor() {
        this.isDisabled = true;
        this.student = DETAILS[1];
    }
    change() {
        this.isDisabled = false;
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map