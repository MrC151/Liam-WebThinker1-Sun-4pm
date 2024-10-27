const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes using app.route
app.route('/users')
    .get((req, res) => {
        // Logic to get all users
        res.send('Get all users');
    })
    .post((req, res) => {
        // Logic to create a new user
        const newUser = req.body;
        res.send(`User created: ${JSON.stringify(newUser)}`);
    });

app.route('/users/NBLINE.Points')
    .get((req, res) => {
        const status = req.query.status; // Get the status from query parameters
        let responseMessage;
        let NBLINE_points = 999
        if (status === 'Old') {
            responseMessage_TerminalPoints = `Terminal Points are at: ${Terminal_Points}`;
            res.send(responseMessage_TerminalPoints);
        } else if (status === 'inactive') {
            responseMessage = "Terminal Points are inactive. Please check your account.";
        } else {
            responseMessage = "Status is unknown. Please provide a valid status.";
        }
        res.send(`NBLINE Points Updated to: ${NBLINE_points}`)
    
    })
    app.route('/users/Terminal.Points')
    .get((req, res) => {
        const status = req.query.status; // Get the status from query parameters
        let responseMessage;
        let Terminal_points = req.body.data;
        if (status === 'Old') {
            responseMessage_TerminalPoints = `Terminal Points are at: ${Terminal_Points}`;
            res.send(responseMessage_TerminalPoints);
        } else if (status === 'inactive') {
            responseMessage = "Terminal Points are inactive. Please check your account.";
        } else {
            responseMessage = "Status is unknown. Please provide a valid status.";
        }
        res.send(`Current Points in Terminal: ${Terminal_points}`)
    
    })
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
