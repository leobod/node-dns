class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

class Lexer {
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
            } else {
                // Handle other token types
                // ...

                // If the character doesn't match any known token, throw an error
                throw new Error(`Unexpected character: ${char}`);
            }
        }
        return tokens;
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

// 示例用法
const sourceCode = 'let greeting = "Hello, World!";';
const lexer = new Lexer(sourceCode);
const tokens = lexer.tokenize();

tokens.forEach(token => {
    console.log(`Type: ${token.type}, Value: ${token.value}`);
});
