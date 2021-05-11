"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = void 0;
const employe = {
    firstName: 'leo',
    lastName: 'Romero;',
    age: 18,
    fullName() {
        return this.firstName + this.lastName;
    }
};
// ejemplo con interfaces
function test(frontend) {
    const { html, css } = frontend;
    if (html && css) {
        console.log('Es un dev Senior');
    }
    else {
        console.log('Es un dev Junior');
    }
}
const data = {
    html: true,
    css: false
};
test(data);
exports.values = {
    react: true,
    angular: false,
    experiences: 3,
    name: 'leo'
};
function inter(values) {
    if (values.react) {
        console.log('saba react');
    }
}
inter(exports.values);
