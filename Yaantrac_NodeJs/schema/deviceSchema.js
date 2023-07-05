
module.exports = (sequelize, Sequelize) => {
  const Devicelist = sequelize.define('devicelist', {
    accountID: Sequelize.STRING,
    groupID: Sequelize.STRING,
    deviceID: Sequelize.STRING,
    geozoneID:Sequelize.STRING,
    lastUpdateID:Sequelize.NUMBER,
    creationTime:Sequelize.NUMBER,
    isActive:Sequelize.NUMBER,
    lastUpdateTimeL:Sequelize.BIGINT
  })
    return Devicelist;
  };
 