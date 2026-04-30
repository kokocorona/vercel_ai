const indexR = require("./index");
const usersR = require("./users"); 
const drinksR = require("./drinks"); 
const aiTestR = require("./aiTest");
const ai2R = require("./ai2");




// הגדרת כל הראוטים באפליקציה
exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/drinks",drinksR);
  app.use("/aiTest",aiTestR);
  app.use("/ai2",ai2R);


}


