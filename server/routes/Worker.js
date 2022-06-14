const express = require('express')
const router = express.Router()
const Worker = require('../model/Worker')

// Routes about "Workers"

    // Get all workers
router.get('/', async(req,res) => {
    const workers = await Worker.find()
    res.status(200).send(workers)
})

    // Get one worker
router.get('/:id', async(req,res) => {
    const {id} = req.params
    const worker = await Worker.findById({_id:id})
    res.status(200).send(worker)
})

    // Create a new worker
router.post('/create', async(req,res) => {
    const {firstname} = req.body
    const {lastname} = req.body
    const {password} = req.body
    const {email} = req.body
    const {location} = req.body
    const {address} = req.body
    const {zip} = req.body
    const {bio} = req.body
    const {profilepicture} = req.body
    const {sector} = req.body
    const {openingHours} = req.body

    if(!firstname || !lastname || !address || !zip || !location || !sector || !bio || !openingHours || !password || !email) {
        res.status(400).send('Une information est manquante ou incomplète.')
        return
    }

    const newWorker = new Worker({
        firstname : firstname,
        lastname: lastname,
        password : password, 
        email: email,
        address: address,
        zip: zip,
        location: location,
        bio: bio,
        profilepicture : profilepicture,
        sector : sector,
        openingHours : openingHours
    })

    await newWorker.save()
    res.status(201).json(newWorker)
    return
})

// Update user values

router.put('/:id', async(req,res) => {
    const {id} = req.params
    const worker = await Worker.findById({_id : id})

    // Get values to update

    const {firstname} = req.body
    const {lastname} = req.body
    const {location} = req.body
    const {address} = req.body
    const {zip} = req.body
    const {bio} = req.body
    const {profilepicture} = req.body
    const {sector} = req.body
    const {openingHours} = req.body

    // Values are correct ? 

    if(firstname) worker.firstname = firstname
    if(lastname) worker.lastname = lastname
    if(location) worker.location = location
    if(address) worker.address = address
    if(zip) worker.zip = zip
    if(bio) worker.bio = bio
    if(profilepicture) worker.profilepicture = profilepicture
    if(sector) worker.sector = sector
    if(openingHours) worker.openingHours = openingHours

    await worker.save()
    res.status(201).json(worker)

})

    // Delete worker
router.delete('/:id', async(req,res) => {
    const {id} = req.params
    const del = await Worker.deleteOne({_id : id})
    res.status(200).json(del)
})

module.exports = router
