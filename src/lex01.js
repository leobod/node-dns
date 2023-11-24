// 定义词法分析器函数
function lexer(code) {
    // 用于存储生成的标记
    let tokens = [];

    // 正则表达式定义不同类型的标记模式
    const patterns = [
        // 关键字
        { type: 'keyword', pattern: /^(if|else|while|for|function)\b/ },
        // 标识符
        { type: 'identifier', pattern: /^[a-zA-Z]\w*/ },
        // 数字
        { type: 'number', pattern: /^\d+(\.\d+)?/ },
        // 运算符
        { type: 'operator', pattern: /^(\+|-|\*|\/|%|=|==|===|!=|!==|>|<|>=|<=|\|\||&&)/ },
        // 分号
        { type: 'semicolon', pattern: /^;/ },
        // 括号
        { type: 'parenthesis', pattern: /^(\(|\))/ },
        // 花括号
        { type: 'brace', pattern: /^(\{|})/ },
        // 空白符
        { type: 'whitespace', pattern: /^\s+/ },
        // 注释
        { type: 'comment', pattern: /^\/\/.*/ },
    ];

    // 循环遍历代码字符串
    while (code.length > 0) {
        let match = false;

        // 在模式中查找匹配
        patterns.forEach(patternInfo => {
            const regex = patternInfo.pattern;
            const tokenType = patternInfo.type;

            const tokenValue = code.match(regex);

            if (tokenValue) {
                // 将匹配到的标记添加到 tokens 数组中
                tokens.push({ type: tokenType, value: tokenValue[0] });
                code = code.slice(tokenValue[0].length); // 移除已匹配的部分
                match = true;
            }
        });

        // 如果没有任何模式匹配，则跳过该字符
        if (!match) {
            code = code.slice(1);
        }
    }

    return tokens;
}

// 要分析的代码字符串
const codeString = `
    function add(a, b) {
        return a + b;
    }
`;

// 对代码字符串进行词法分析
const tokens = lexer(codeString);
console.log(tokens);
