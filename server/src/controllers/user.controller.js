const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')

//follow feature

async function followUsers(req, res){

    const userFollower = req.user.username
    const userFollowee = req.params.username

    if(userFollowee == userFollower){
        return res.status(400).json({
            message : 'you cannot follow yourself.'
        })
    }

    const isFolloweeExist = await userModel.findOne({
        username : userFollowee
    })

    if(!isFolloweeExist){
        return res.status(404).json({
            message : `user is not exist`
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower : userFollower,
        followee : userFollowee
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message : `you already follow the ${userFollowee}.`
        })
    }

    const followRecord = await followModel.create({
        follower : userFollower,
        followee : userFollowee
    })

    res.status(201).json({
        message : `You started following the ${userFollowee}`,
        follow : followRecord
    })

}

//unfollow feature

async function unfollowUsers(req,res){

    const userFollower = req.user.username
    const userFollowee = req.params.username

    const isUserFollowing = await followModel.findOne({
        followee : userFollowee,
        follower : userFollower
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message : `You are not following ${userFollowee}.`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message : 'You unfollow the user'
    })
}

module.exports = { followUsers , unfollowUsers }