const env = process.env
console.log(env.PASSWORD)
module.exports = {
    HOST: env.HOST,
    USER: env.USER,
    PASSWORD: env.PASSWORD,
    DB: env.DATABASE,
    dialect: "mysql",
    
  };
  