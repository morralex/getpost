var dataArr = require("../data/data");

module.exports = function(app) {

// making the GET reqest -------

    app.get("/api/data", function(req, res) {
        res.json(data)
    });

// making the POST req -------

    app.post("/api/data", function(req, res) {

        data.push(req.body);
        

    });

};

