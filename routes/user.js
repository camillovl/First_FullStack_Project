const express = require('express');

const router = express.Router();


router.post('/create-user', async (req, res) => {
    res.json(req.body);

    const isNewUser = await User.isThisEmailInUse(email)
    if (!isNewUser) return res.json({ succes: false, message: 'This email is already in use, try sign in again' })
    const user = await User({
        fullname: ' ',
        email: email,
        password: ' ',
    })
    await user.save()
    res.json(user)

})

module.exports = router;