const ContactController = {
    submitContactDetails: function (req, res, next) {
        const requestedData = req.body;
        console.log(requestedData);
        res.send("Contact Details Received Successfully !.. ");
    }
}

module.exports = ContactController;
