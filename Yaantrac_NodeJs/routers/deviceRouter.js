var express = require('express')
var router = express.Router()

const deviceController=require('../controller/deviceController')
router.get('/devicelist/:groupID', deviceController.devicelist);
router.post('/adddevice',deviceController.addDevice)

module.exports=router