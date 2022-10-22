
module.exports = function(app) {
    const adminLoginRouter = require("./admin-login")
    const vendorRouter = require("./vendor")
    const vendorLoginRouter = require("./vendor-login")
    const productRouter = require("./product")
    
    app.use("/admin-login", adminLoginRouter);
    app.use("/vendor-login", vendorLoginRouter)
    app.use("/create-vendor", vendorRouter);
    app.use("/get-vendors", vendorRouter);
    app.use("/create-product", productRouter)

}