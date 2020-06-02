// A chunk of text that represents a single element of code,
// with fields linking it back to its source.
export class Token {
    constructor(value, type, stringIndex) {
        this.value = value;
        this.startStringIndex = stringIndex;
        this.length = value.length;
        this.endStringIndex = this.startStringIndex + this.length;
        this.type = type;
        Object.seal(this);
    }

    clone() {
        return new Token(this.value, this.type, this.startStringIndex);
    }

    splitAt(i) {
        var next = this.value.substring(i);
        this.value = this.value.substring(0, i);
        return new Token(next, this.type, this.startStringIndex + i);
    }

    toString() {
        return "[" + this.type + ": " + this.value + "]";
    }
};
