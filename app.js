import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
// app.get('/cors', (req, res) => {
//     res.send('This has CORS enabled 🎈')
// })

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })

    // To set the Access-Control-Allow-Origin to specific domains instead of the asterisk. For instance, setting it to http://localhost:3000 will only enable CORS for clients that are running on the specified URL, localhost:3000.
    // We can do this by setting the Access-Control-Allow-Origin header to the specific domain we want to allow. Here’s how we can do that:
    // app.get('/cors', (req, res) => {
    //     res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    //     res.send({ "msg": "This has CORS enabled 🎈" })
    //     })


// To  Proxy Requests in a React App
// To tell your React app to proxy your requests to a server using the proxy property inside the package.json file. This is a simple one-step process. Go inside your app's package.json file and add the following property:

// {
// ...
// "proxy":"http://localhost:8080"
// ...
// }
// Now if you restart your React development server, you'll notice that all requests are being served to http://localhost:8080 instead of http://localhost:3000. You've proxied your React development server to your back-end server. The above works exactly the same way for third-party services as well. 

// Under the hood, when your React app requests resources from http://localhost:8080, it pretends to be requesting this resource from the origin http://localhost:8080 instead of http://localhost:3000. This seems in line with browser's SOP, and you no longer get the CORS error.
// Let's say you're using a service on https://randomservice.com and you come across the CORS error. You can add the URL inside the proxy property in your package.json file.

// {
// ...
// "proxy":"https://randomservice.com"
// ...
// }
// The development server will only attempt to send requests without text/html in its Accept header to the proxy.

// Thus for the above method to work, you need to ensure that the server doesn't have text/html in its Accept header. In rare cases, you might need to specify more than one proxy URL. You can set up a proxy manually using a package http-proxy-middleware by following the steps given here.



// For more complex scenarios, you can use the http-proxy-middleware package. This package allows you to set up a proxy manually. Here's how you can do that:
// https://www.telerik.com/blogs/supporting-cors-by-proxying-requests-with-express  
//  https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en&pli=1
// https://www.npmjs.com/package/http-proxy-middleware


app.listen(8080, () => {
    console.log('listening on port 8080')
})