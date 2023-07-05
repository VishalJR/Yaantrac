const { log } = require('console');
const db=require('../connections/mySql')
const Devicelist=db.deviceSchema
const Op = db.Sequelize.Op;

async function devicelist(req,res){
  
    const groupID = req.params.groupID;
  
    try {
      const device = await Devicelist.findOne({ where: { groupID } });
      
      if (!device) {
        res.status(404).send('Device not found');
        return;
      }
      
      res.json(device);
    } catch (error) {
      console.error(error);
      res.status(500).json({message:error});
    }
  };

  async function addDevice (req,res){
    const { accountID, groupID, deviceID, geozoneID, lastUpdateID, creationTime, isActive, lastUpdateTime,createdAt, updatedAt } = req.body;
    const newDevice = Devicelist.build({ accountID, groupID, deviceID, geozoneID, lastUpdateID, creationTime, isActive, lastUpdateTime,createdAt, updatedAt})
    
    try {
      await newDevice.save();
      res.status(200).json({message:'Data created',newDevice});
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  
    
      

module.exports={devicelist,addDevice}