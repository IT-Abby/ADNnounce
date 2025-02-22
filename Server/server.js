const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

app.post('/comehere', (req,res) => {
  console.log("recieved: ", req.body);
  res.json({message:'Successfully accepted'})  
})

app.get('/test', (req,res) => {
    res.json({hi: 'HERLLO THERE!', age:35})
})

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
