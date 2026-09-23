const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/" && req.method === "GET") {

        res.statusCode = 200;
        res.end("Welcome to Smart Utility Toolkit!");

    } else if (req.url === "/about" && req.method === "GET") {

        res.statusCode = 200;
        res.end("This is the About page.");

    } else if (req.url === "/contact" && req.method === "GET") {

        res.statusCode = 200;
        res.end("This is the Contact page.");

    } else {

        res.statusCode = 404;
        res.end("404 - Page Not Found");

    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});