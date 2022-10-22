
module.exports = function(app) {
    const adminLoginRouter = require("./admin-login")
    const vendorRouter = require("./vendor")
    const vendorLoginRouter = require("./vendor-login")
    
    app.use("/admin-login", adminLoginRouter);
    app.use("/vendor-login", vendorLoginRouter)
    app.use("/create-vendor", vendorRouter);
    app.use("/get-vendors", vendorRouter);

}