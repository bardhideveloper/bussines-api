const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes') 
const userRolesRoutes = require('./routes/userRolesRoutes')
const orderRoutes = require('./routes/orderRoutes')
const orderItemRoute = require('./routes/orderItemRoute')
const contactUsRoutes = require('./routes/contactUsRoutes')

app.use(cors());

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', userRolesRoutes);
app.use('/api', orderRoutes);
app.use('/api', orderItemRoute);
app.use('/api', contactUsRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} READY FOR YOU!!!`);
});