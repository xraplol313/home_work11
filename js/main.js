let WorkWithDom = function () {

    let newElement;

    this.addTag = function (tagName) {
        newElement = document.createElement(tagName);
        newElement.innerHTML = ` Добавлен новый тэг ${tagName} `;
        console.log(newElement);
    }

    this.addAttr = function (tagName, name, value) {
        newElement = document.createElement(tagName);
        newElement.setAttribute(name, value);
        newElement.innerHTML = ` Добавлен атрибут ${name} `;
        console.log(newElement);
    }

    this.addHTML = function (tagName, value) {
        newElement = document.createElement(tagName);
        newElement.innerHTML = value;
        console.log(newElement);
    }

    this.searchCss = function (selector) {
        newElement = document.createElement('div');
        let newSelector = document.querySelector(selector);
        console.log(newSelector);
    }

    this.addClassName = function (tagName, className, value) {
        newElement = document.createElement(tagName);
        newElement.setAttribute(className, value);
        console.log(newElement);
    }

    this.removeClass = function (element, className, remove) {
        newElement = document.createElement(element);
        newElement.setAttribute(className, remove);
        console.log(newElement);

        newElement.classList.remove(className, remove);
        console.log(newElement)
    }

    this.toggleClass = function (element, className, value) {
        newElement = document.createElement(element);
        newElement.setAttribute(className, value);
        newElement.classList.toggle(value);
        console.log(newElement);

    }

    this.hasClass = function (element, className, value) {
        newElement = document.createElement(element);
        newElement.setAttribute(className, value);
        if (newElement.classList.contains(value)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

let dom = new WorkWithDom();

dom.addTag('div');
dom.addAttr('div', 'id', 'main__div');
dom.addHTML('div', 'Добавить любое значение');
dom.searchCss('div');
dom.addClassName('div', 'class', 'main__title');
dom.removeClass('div', 'class', 'div__remove');
dom.toggleClass('div', 'class', 'toggle');
dom.hasClass('div', 'class', 'open');