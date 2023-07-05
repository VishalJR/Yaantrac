module.exports = (sequelize, Sequelize) => {
    const user=sequelize.define('user',{
       accountID:Sequelize.STRING,
       userID:Sequelize.STRING,
       userType:Sequelize.INTEGER,
       
    })
}