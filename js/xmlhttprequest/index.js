var http = require("http");
const { parse } = require("querystring");

http
  .createServer(function(request, response) {
    console.log("有请求进来啦");
    let body = "";
    request.on("data", chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    request.on("end", () => {
      console.log(body);
    });

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "max-age=5"
    });

    let result = { data: "hello" };
    response.end(JSON.stringify(result));
  })
  .listen(8888);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");
