var app = require("./app");
app.listen(app.get('port'),function(){console.log("server running at "+ app.get('port'))});
