class HTML {
    constructor(tag, text, style, attribute, inTag, child) {
        this.attribute = attribute;
        this.tag = tag;
        this.text = text;
        this.inTag = inTag;
        this.style = style;
        this.child = [];
        this.htmlElement = this.getElement();
        this.setAttribute = this.setAttr;
        this.setStyle = this.setStyle;
        this.setEndElement = this.setEndElement;
        this.setStartElement = this.setStartElement;
    }

    getElement() {
        let html = document.createElement(this.tag);
        html.innerText = this.text;
        html.style.cssText = this.style;
        if (this.attribute != null) {
            this.attribute.forEach(element => {
                html.setAttribute(element[0], element[1]);
            });
        }
        return html;
    }

    setAttr(attr) {
        if (this.attribute != null) {
            this.attribute.forEach(element => {
                this.htmlElement.setAttribute(element[0], element[1]);
            });
        }
    }

    setStyle(stylecss) {
        this.htmlElement.style.cssText = stylecss;
    }

    setEndElement(child) {
        this.child.push(child.getHtml());
    }

    setStartElement(child) {
        this.child.unshift(child.getHtml());
    }

    getHtml() {
        if (this.child != null) {
            this.child.forEach(item => this.htmlElement.appendChild(item));
        }
        return this.htmlElement;
    }
}

let attr = [["id", "wrapper"]];
let div = new HTML("div", "", "display:flex", attr);

let div2 = new HTML("div", "", "width:300px;margin:10px;");

let img = new HTML("img", "", "width: 100%", [["src", "summer.jpg"], ["alt", "Lorem Ipsum"]]);

div2.setEndElement(img);
div2.setStartElement(new HTML("h3", "What is Lorem Ipsum?"));

let p = new HTML("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "text-align:justify");
p.setEndElement(new HTML("a", "More...", "", [["href", "https://lipsum.com"], ["target", "_blank"]]));
div2.setEndElement(p);

div.setStartElement(div2);

let div3 = new HTML("div", "", "width:300px;margin:10px;");

let img2 = new HTML("img", "", "width: 100%", [["src", "summer.jpg"], ["alt", "Lorem Ipsum"]]);

div3.setEndElement(img2);
div3.setStartElement(new HTML("h3", "What is Lorem Ipsum?"));

let p2 = new HTML("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "text-align:justify");
p2.setEndElement(new HTML("a", "More...", "", [["href", "https://lipsum.com"], ["target", "_blank"]]));
div3.setEndElement(p2);

div.setEndElement(div3);

document.body.appendChild(div.getHtml());