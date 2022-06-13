let express = require('express')
let router = express.Router()
const User = require('../model/User')

// Routes about "Users"

    // Get all users
router.get('/', async(req, res) => {
    const users = await User.find()
    res.status(200).send(users)
})

    // Get one user 

router.get('/:id', async(req,res) => {
    const {id} = req.params
    const user = await User.findById({_id : id})
    res.status(200).send(user)
})


    // Create a new user 

router.post('/create', async(req, res) => {
    const {firstname} = req.body
    const {lastname} = req.body
    const {address} = req.body
    const {zip} = req.body
    const {location} = req.body
    const {favorites} = req.body
    const {bio} = req.body
    const {picture} = req.body

     if(!firstname || !lastname || !address || !zip || !location ) {
         res.status(400).send('Une information est manquante ou incomplète.')
         return
     }

    const newUser = new User({
        firstname:firstname,
        lastname:lastname,
        address: address,
        zip:zip,
        location:location,
        favorites:favorites,
        bio:bio,
        picture:picture
    })

    await newUser.save()
    res.status(201).json(newUser)
    return
})

 // Update user values

router.patch('/:id', async(req, res) => {
    const {id} = req.params
    const user = await User.findById({_id : id})

    // Get values to update
    const {firstname} = req.body
    const {lastname} = req.body
    const {address} = req.body
    const {zip} = req.body
    const {location} = req.body
    const {favorites} = req.body
    const {bio} = req.body
    const {picture} = req.body

    // Values are correct ? 

    if(firstname) user.firstname = firstname
    if(lastname) user.lastname = lastname
    if(address) user.address = address
    if(zip) user.zip = zip
    if(location) user.location = location
    if(favorites) user.favorites = favorites
    if(bio) user.bio = bio
    if(picture) user.picture = picture

    await user.save()
    res.status(201).json(user)
})

// Delete user 

router.delete('/:id', async(req, res) => {
    const {id} = req.params
    const del = await User.deleteOne({_id : id})
    res.status(200).json(del)
})

module.exports = router