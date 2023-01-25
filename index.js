const express = require('express');
const routes= require('./routes/users.js');

const app = express();
const PORT=process.env.PORT||5000;

app.use(express.json());
app.use("/user",routes);
app.listen(PORT,()=>`Server is running at http://localhost:${PORT}`);