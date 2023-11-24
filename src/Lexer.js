class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

class Lexer {
    keywords = ['let', 'var', 'if', 'else', 'while', 'function', 'return', 'true', 'false'];

    constructor(sourceCode) {
        this.sourceCode = sourceCode;
        this.position = 0;
    }

    tokenize() {
        const tokens = [];
        while (this.position < this.sourceCode.length) {
            const char = this.sourceCode[this.position];

            if (char === '"') {
                tokens.push(this.tokenizeStringLiteral());
            } else if (/\s/.test(char)) {
                // Skip whitespaces
                this.position++;
            } else if (/[a-zA-Z_]/.test(char)) {
                tokens.push(this.tokenizeIdentifierOrKeyword(this.keywords));
            } else if (/\d/.test(char)) {
                tokens.push(this.tokenizeNumber());
            } else {
                this.position++
                console.warn(`Unexpected character: ${char}`);
            }
        }
        return tokens;
    }

    tokenizeIdentifierOrKeyword(keywords) {
        let value = '';
        while (this.position < this.sourceCode.length) {
            const char = this.sourceCode[this.position];

            if (/[a-zA-Z_]/.test(char)) {
                // The first character can be a letter or underscore
                value += char;
                this.position++;
            } else if (/[a-zA-Z0-9_]/.test(char)) {
                // Subsequent characters can be letters, underscores, or numbers
                value += char;
                this.position++;
            } else {
                // End of the identifier or keyword
                if (keywords.includes(value)) {
                    // It's a keyword
                    return new Token('KEYWORD', value);
                } else {
                    // It's an identifier
                    return new Token('IDENTIFIER', value);
                }
            }
        }
    }

    tokenizeNumber() {
        let value = '';
        while (this.position < this.sourceCode.length) {
            const char = this.sourceCode[this.position];
            if (/\d/.test(char) || char === '.') {
                value += char;
                this.position++;
            } else {
                // End of the number
                return new Token('NUMBER', parseFloat(value));
            }
        }
    }

    tokenizeStringLiteral() {
        let value = '';
        this.position++; // Skip the opening quote

        while (this.position < this.sourceCode.length) {
            const char = this.sourceCode[this.position];

            if (char === '"') {
                // End of the string literal
                this.position++; // Skip the closing quote
                return new Token('STRING_LITERAL', value);
            }

            value += char;
            this.position++;
        }

        // If we reach here, the string literal is not properly closed
        throw new Error('Unterminated string literal');
    }
}

// 要分析的代码字符串
const codeString = `
    function add(a, b) {
        return a + b;
    }
`;

// 对代码字符串进行词法分析
const tokens = new Lexer(codeString);
console.log(tokens);
const result = tokens.tokenize();
console.dir(result);