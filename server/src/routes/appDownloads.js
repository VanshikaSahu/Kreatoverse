const express = require('express')
const AppDownloads= require('../model/app-downloads')

const router = express.Router()

router.get("/", async(req, res)=>{
    try {
        const appDownloads = await AppDownloads.aggregate(
            [
                {$project: {
                    createdAt: {
                       $dateFromString: {
                          dateString: '$createdAt',
                       }
                    },
                    download:1,
                    upload:1,
                    hostName:1,
                    useageSeconds:1
                 }},
                 {   $addFields: { "creationDate":  {$dateToString:{format: "%Y-%m-%d", date: "$createdAt"}}}},
                  { $group: {
                    _id: { creationDate: "$creationDate", hostName:"$hostName"},
                    downloads:{$sum: "$download"},
                    uploads:{$sum: "$upload"},
                    useageSeconds:{$sum: "$useageSeconds"}
                    }
                },
            ]
        )
        console.log(appDownloads)
       
        res.send(appDownloads)
    } catch (err) {  
        console.log(err)
    }
})
 
module.exports = router;