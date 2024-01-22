const express = require("express");
const router = express.Router();

router.get("/Login", function (req, res) {       
    res.render("login", { errorMessage : "" });
});

router.post("/Login", function (req, res) {   
    
    let uid = req.body.t1;
    let pwd = req.body.t2;

    if(uid == "admin" && pwd == "admin123")
    {       
        res.redirect("/");  // Redirect from one route to another route
    }
    else
    {   res.render("login", { errorMessage : "Invalid uid or password."  });
    }   
});


module.exports = router;