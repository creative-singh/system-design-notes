const fs = require('fs');

// Interface simulation for DocumentElement: just a base class for consistency
class DocumentElement {
    render() {
        throw new Error('Method "render()" must be implemented.');
    }
}

// Concrete implementation for text elements
class TextElement extends DocumentElement {
    constructor(text) {
        super();
        this.text = text;
    }

    render() {
        return this.text;
    }
}

// Concrete implementation for image elements
class ImageElement extends DocumentElement {
    constructor(imagePath) {
        super();
        this.imagePath = imagePath;
    }

    render() {
        return `[Image: ${this.imagePath}]`;
    }
}

// NewLineElement represents a line break in the document
class NewLineElement extends DocumentElement {
    render() {
        return '\n';
    }
}

// TabSpaceElement represents a tab space in the document
class TabSpaceElement extends DocumentElement {
    render() {
        return '\t';
    }
}

// Document class responsible for holding a collection of elements
class Document {
    constructor() {
        this.documentElements = [];
    }

    addElement(element) {
        this.documentElements.push(element);
    }

    // Renders the document by concatenating the render output of all elements
    render() {
        return this.documentElements.map((element) => element.render()).join('');
    }
}

// Persistence Interface simulation; just a base class
class Persistence {
    save(data) {
        throw new Error('Method "save()" must be implemented.');
    }
}

// FileStorage implementation of Persistence using Node.js fs
class FileStorage extends Persistence {
    save(data) {
        fs.writeFile('document.txt', data, (err) => {
            if(err) {
                console.error('Unable to open file for writing.');
            } else {
                console.log('Document saved to document.txt');
            }
        });
    }
}

// Placeholder DBStorage implementation
class DBStorage extends Persistence {
    save(data) {
        // Save to DB logic here
    }
}

// DocumentEditor class managing client interactions
class DocumentEditor {
    constructor(document, storage) {
        this.document = document;
        this.storage = storage;
        this.renderedDocument = '';
    }

    addText(text) {
        this.document.addElement(new TextElement(text));
    }

    addImage(imagePath) {
        this.document.addElement(new ImageElement(imagePath));
    }

    addNewLine() {
        this.document.addElement(new NewLineElement());
    }

    addTabSpace() {
        this.document.addElement(new TabSpaceElement());
    }

    renderDocument() {
        if(!this.renderedDocument) {
            this.renderedDocument = this.document.render();
        }
        return this.renderedDocument;
    }

    saveDocument() {
        this.storage.save(this.renderDocument());
    }
}

// Client usage example
function main() {
    const document = new Document();
    const persistence = new FileStorage();

    const editor = new DocumentEditor(document, persistence);

    // Simulate a client using the editor with common text formatting features
    editor.addText('Hello, world!');
    editor.addNewLine();
    editor.addText('This is a real-world document editor example.');
    editor.addNewLine();
    editor.addTabSpace();
    editor.addText("Indented text after a tab space.");
    editor.addNewLine();
    editor.addImage('picture.jpg');

    // Render and display the final document
    console.log("========PRINTING DOCUMENT===========");
    console.log(editor.renderDocument());

    editor.saveDocument();
}

main();
