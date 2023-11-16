const crypto = require('crypto');

let originalString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJJc0FkbWluIjp0cnVlLCJVc2VyTmFtZSI6InNhIiwiQ3VzdENvZGUiOiJkbXJzIiwiQ29tcGFueUNvZGUiOiJTeXN0ZW0uT2JqZWN0IiwiUm9sZUNvZGUiOiIwNiIsIlJvbGVQcmlvcml0eSI6IjEiLCJMb2dpbk5hbWUiOiLnrqHnkIblkZgiLCJuYmYiOjE3MDAxMTk1NzAsImV4cCI6MTcwMDMxOTU3MCwiaXNzIjoiand0SXNzdWVyVXBsdXMiLCJhdWQiOiJqd3RBdWRpZW5jZVVwbHVzIn0.xThNhvnz151lJ3XcKSb2dB6MgII6XnXxIXKLVgm3C2w";

// 创建哈希
let hash = crypto.createHash('sha256').update(originalString).digest('hex');

console.log(hash);

let hash2 = crypto.createHash('md5').update(originalString).digest('hex');

console.log(hash2);
