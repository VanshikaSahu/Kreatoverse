
module.exports = function(app) {
    const adminLoginRouter = require("./admin-login")
    app.use("/admin-login", adminLoginRouter);
}