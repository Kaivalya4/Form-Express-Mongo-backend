const express = require("express");
const router = express.Router();
const User = require("../userSchema");

router.post("/save", (req, res) => {
    console.log(req.body);
    const {
        firstname,
        lastname,
        mobile,
        age,
        business,
        gstno,
        address,
        employees,
        loanamt,
        interest,
        tenure,
    } = req.body;

    console.log({
        firstname,
        lastname,
        mobile,
        age,
        business,
        gstno,
        address,
        employees,
        loanamt,
        interest,
        tenure,
    });

    const user1 = new User({
        first_name: firstname,
        last_name: lastname,
        mobile: mobile,
        age: age,
        business_name: business,
        gst_no: gstno,
        address: address,
        employees: employees,
        loan_amt: loanamt,
        interest_rate: interest,
        laon_tenure: tenure,
    });

    user1
        .save()
        .catch((err) =>
            res
                .status(402)
                .send("Some error occurred while submitting the form !!!")
        );

    res.status(200).send("Form successfully submitted");
});

module.exports = router;
