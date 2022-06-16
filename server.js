const { response, query } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const PORT = 8000

const guns = {
    'kilo 141':
    {
        'damage': 42,
        'mag': 30,
        'rpm': 750
    },
    'fal':
    {
        'damage': 79,
        'mag': 20,
        'rpm': 470
    },
    'm4a1':
    {
        'damage': 40,
        'mag': 30,
        'rpm': 809
    },
    'fr 5.56':
    {
        'damage': 64,
        'mag': 30,
        'rpm': 475
    },
    'oden':
    {
        'damage': 77,
        'mag': 20,
        'rpm': 413
    },
    'm13':
    {
        'damage': 36,
        'mag': 30,
        'rpm': 890
    },
    'fn scar':
    {
        'damage': 56,
        'mag': 20,
        'rpm': 573
    },
    'ak-47':
    {
        'damage': 56,
        'mag': 30,
        'rpm': 545
    },
    'unkown':
    {
        'damage': 'unkown',
        'mag': 'unkown',
        'rpm': 'unkown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(guns)
})

app.get('/api/:gunName', (request, response) => {
    const gunName = request.params.gunName.toLowerCase()
    if (guns[gunName]) {
        response.json(guns[gunName])
    }
    else {
        response.json(guns['unkown'])
    }

})

app.listen(PORT, (request, response) => {
    console.log(`THE api is active on port ${PORT}! go get em soldier`)
})