"use strict";
const employe = {
    firstName: 'leo',
    lastName: 'Romero;',
    age: 18,
    fullName() {
        return this.firstName + this.lastName;
    }
};
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
