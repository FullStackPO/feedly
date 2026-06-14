const followModel = require('../models/follow.model')

async function followUsers(req, res){

    const userFollower = req.user.username
    const userFollowee = req.params.username

    const followRecord = await followModel.create({
        follower : userFollower,
        followee : userFollowee
    })

    res.status(201).json({
        message : `You started following the ${userFollowee}`,
        follow : followRecord
    })

}

module.exports = followUsers