// 使用 lz-string 进行压缩和解压缩
const LZString = require('lz-string');

let originalString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJJc0FkbWluIjp0cnVlLCJVc2VyTmFtZSI6InNhIiwiQ3VzdENvZGUiOiJkbXJzIiwiQ29tcGFueUNvZGUiOiJTeXN0ZW0uT2JqZWN0IiwiUm9sZUNvZGUiOiIwNiIsIlJvbGVQcmlvcml0eSI6IjEiLCJMb2dpbk5hbWUiOiLnrqHnkIblkZgiLCJuYmYiOjE3MDAxMTk1NzAsImV4cCI6MTcwMDMxOTU3MCwiaXNzIjoiand0SXNzdWVyVXBsdXMiLCJhdWQiOiJqd3RBdWRpZW5jZVVwbHVzIn0.xThNhvnz151lJ3XcKSb2dB6MgII6XnXxIXKLVgm3C2w";

// 压缩
let compressedString = LZString.compress(originalString);

console.log('compressedString: ', compressedString)

// 解压缩
let decompressedString = LZString.decompress(compressedString);

console.log('decompressedString: ', decompressedString);
