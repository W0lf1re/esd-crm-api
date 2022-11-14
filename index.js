const express = require('express')
const { default: mongoose } = require('mongoose')
// dotenv
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000

// ORM Mongoose
mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADDRESS}:${process.env.MONGO_PORT}`, {})

const Customer = mongoose.model('Customer', { firstName: String, lastName: String })
// const Invoices = mongoose.model('Invoices', { firstName: String, lastName: String })

app.use(express.json())

// Routes Express
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// get all customers
app.get("/customers", (req, res) => {
    Customer.find().then((customers) => {
        res.send(customers);
    });
});

// get a single customer
app.get('/customers/:id', (req, res) => {
    Customer.findById(req.params.id).then((customer) => {
        res.send(customer)
    });
});

// create a customer
app.post('/customers', (req, res) => {
    const data = req.body
    const customer = new Customer(data)
    customer.save().then(dataDB => {
        console.log(dataDB);
        res.send(dataDB)
    })
})

// update a customer
app.put('/customers/:id', (req, res) => {
    const data = req.body
    Customer.findByIdAndUpdate(req.params.id, data).then(() => {
        Customer.findOne({ _id: req.params.id }).then((customer) => {
            res.send(customer)
        });
    });
})

// delete a customer
app.delete('/customers/:id', (req, res) => {
    Customer.findByIdAndRemove(req.params.id).then((customer) => {
        res.send("customer deleted")
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})