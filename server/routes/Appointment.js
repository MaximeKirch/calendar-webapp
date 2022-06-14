const express = require('express')
const router = express.Router()
const Appointment = require('../model/Appointment')

    // Get all appointments 

router.get('/', async(req, res) => {
    const appointments = await Appointment.find()
    res.status(200).json(appointments)
})

    // Get one appointment

router.get('/:id', async(req,res) => {
    const {id} = req.params
    const appointment = await Appointment.findById({_id : id})
    res.status(200).json(appointment)
})

    // Create a new appointment 

router.post('/create', async(req,res) => {
    const {date} = req.body
    const {hour} = req.body
    const {idUser} = req.body
    const {idWorker} = req.body

    if(!date || !hour || !idUser || !idWorker) {
        res.status(404).send('Une information est incomplète.')
        return
    }

    const newAppointment = new Appointment({
        date : date,
        hour: hour,
        idUser : idUser,
        idWorker : idWorker
    })

    await newAppointment.save()
    res.status(201).json(newAppointment)
    return
})

        // Update an appointment 

    router.put('/:id', async(req,res) => {
        const {id} = req.params
        const appointment = await Appointment.findById({_id:id})

        // Get values to update 

        const {date} = req.body
        const {hour} = req.body

        // Values are valid ? 

        if(!date || !hour) {
            res.status(404).send('Une information est incomplète.')
            return
        }

        await Appointment.save()
        res.status(201).json(appointment)
    })

        // Delete an appointment

    router.delete('/:id', async(req,res) => {
        const {id} = req.params
        const del = await Appointment.deleteOne({_id:id})
        res.status(200).json(del)

    })