
module.exports = function(app) {
    const adminLoginRouter = require("./admin-login")
    const vendorRouter = require("./vendor")
    
    app.use("/admin-login", adminLoginRouter);
    app.use("/create-vendor", vendorRouter);
    app.use("/get-vendors", vendorRouter)
}