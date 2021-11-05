const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()


// Creating User
router.post('/users', async (req,res) => {
    const user = new User(req.body)

    try { 
        await user.save()
        const token = await user.generateAuthToken()
        console.log('User was created:', user.name) // wont be in Production (used for debugging)
        res.status(201).send({user, token })
        
    } catch (e) {
        res.status(400).send(e)
    } 
})  

// Login User 
router.post('/users/login', async (req,res) => {
    try {
        const user = await User.findbyCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    } catch (e) {
        console.log(e)
        res.status(400).send()
    }


})


//logout current jwt
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//logout all jwts
router.post('/users/logoutALL', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})


// Remove User
router.delete('/users/me', auth, async (req,res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        // if (!user) {
        //     return res.status(404).send()
        // }
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router 
