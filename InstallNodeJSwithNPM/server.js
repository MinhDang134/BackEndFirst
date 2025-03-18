const { createServer } = require('node:http'); // Node.js

const hostname = '127.0.0.1';
const port = 3000;// thích đặt bao nhiêu cũng được 

const server = createServer((req, res) => {// tạo một website 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World MinhDang Loves EveryOne');
});

server.listen(port, hostname, () => {// Hàm này nó sẽ chạy ở đâu , cần 2 tham số kia

  console.log(`Server running at http://${hostname}:${port}/`);
  // Viết sau khi cái server.listen chạy thành công thì nó sẽ hiện thông tin bên dưới 
});
