
module.exports = function(app) {
    const appDownloadsRouter = require("./appDownloads")
    
    app.use("/app-downloads", appDownloadsRouter);
}