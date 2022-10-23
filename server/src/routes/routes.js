
module.exports = function(app) {
    const adminLoginRouter = require("./admin-login")
    const vendorRouter = require("./vendor")
    const vendorLoginRouter = require("./vendor-login")
    const productRouter = require("./product")
    
    app.use("/admin-login", adminLoginRouter);
    app.use("/vendor-login", vendorLoginRouter)
    app.use("/create-vendor", vendorRouter);
    app.use("/get-vendors", vendorRouter);
    app.use("/vendor/create-product", productRouter);
    app.use("/vendor/get-products", productRouter)
    app.use("/vendor/update-product", productRouter)
    app.use("/vendor/delete-product", productRouter)

}