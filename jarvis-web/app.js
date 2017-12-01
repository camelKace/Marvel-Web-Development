let http = require("http")
let port = 9000
let qs = require("querystring")
let stringbuilder = require("stringbuilder")

function getHome (re, resp) {
    resp.writeHead(200, { "Content-Type":"text/html"})
    resp.write("<html><head><title>Home</title></head><body> Want me to do some calculation? click <a href='/calc'>here</a></body></html>")      
          resp.end();
} 
function get404 (req, resp) {
    resp.writeHead(404,"Resource Not Found", {"Content-Type":"text/html"})
    resp.write("<html><head><title>404</title></head><body>404: Resource not found. Go to  <a href='/'>home</a></body></html>")      
          resp.end();
}
function get405 (req, resp) {
    resp.writeHead(405,"Method not supported", { "Content-Type":"text/html"})
    resp.write("<html><head><title>405</title></head><body>405: Method not supported. Go to click <a href='/'>home</a></body></html>")      
  
    resp.end();
}
function getCalcForm (req, resp) {
let  sb = new StringBuilder({ newline: "\r\n" });

sb.apendLine("<html>");
sb.apendLine("<body>");
sb.apendLine("     <form method= 'post'>");
sb.apendLine("     <table>");
sb.apendLine("     <tr>");
sb.apendLine("     <td>Enter First No:</td>");
sb.apendLine("     <td>input type='text' id ='txtFirstNo'value=''/></td>");
sb.apendLine("     </tr>");
sb.apendLine("     <tr>");
sb.apendLine("     <td>Enter Second No:</td>");
sb.apendLine("     <td>input type='text' id ='txtSecondNo'value=''/></td>");
sb.apendLine("     </tr>");
sb.apendLine("     <tr>");
sb.apendLine("      <td><input type='submit' value='Calculate'/></td>");
sb.apendLine("     </tr>");
sb.apendLine("     <tr>");
sb.apendLine("      <td><span>sum =</span></td>");
sb.apendLine("      </tr>");
sb.apendLine("     </table>");
sb.apendLine("      </form>");
sb.apendLine("</body>");
sb.appendLine("</html>");

sb.build(function (err, result) { 
  resp.writeHead(200, { "Content-Type": "text/html" });
  resp.write(result);
  resp.end();
  });
}

let httpServer = http.createServer(function (req, resp) { 
      console.log(req.url)
  switch (req.method) {
    case "GET":
      if (req.url === "/") {
        getHome(req, resp);
      } 
      else if (req.url === "/calc") {
        getCalcForm(req, resp);
      }
      else {
        get404(req,resp);
      }
    break;    
    case "POST":
    break;
    default:
    get405(req, resp);
       break;
  }

}).listen(port) 

