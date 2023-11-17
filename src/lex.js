const s1 = `
 int a = 123
`

const s0 = s1.replace(/[\r\n]*/g, '')


const total = s0.length

let lexState = ''
const stack = []
const lexList = []

const isAlpha = (ch) => {
    const reg = /^[a-zA-Z][0-9a-zA-Z]*$/
    return reg.test(ch)
}

const isDigit = (ch) => {
    const reg = /^[0-9]+$/
    console.log(ch, reg.test(ch))
    return reg.test(ch)
}

const isSpace = (ch) => {
    const reg = /^\s$/
    return reg.test(isSpace)
}

const isEqual = (ch) => {
    const reg = /^=$/
    return reg.test(ch)
}

const getType = (ch) => {
    if (isAlpha(ch)) {
        return 'ALPHA'
    } else if (isDigit(ch)) {
        return 'DIGIT'
    } else if (isEqual(ch)) {
        return 'SYMBOL'
    } else {
        return ''
    }
}


let i = 0
while (i < total) {
    const current = s0[i]
    if (!current || current === ' ') {
        const s = stack.join('')
        const type = getType(s)
        if (type) {
            lexList.push({ type: type, value: s })
        }
        stack.length = 0
    } else {
        stack.push(current)
    }
    ++i
}
if (stack && stack.length > 0) {
    const s = stack.join('')
    console.log('s', s)
    const type = getType(s)
    if (type) {
        lexList.push({ type: type, value: s })
    }
    stack.length = 0
}

console.log(lexList)

