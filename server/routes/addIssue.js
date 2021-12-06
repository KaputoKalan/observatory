const express = require("express")
const router= express.Router()
const AddIssue = require("../models/addissue")


//REQUEST TO GET ALL POSTS
router.get("/", (req, res) => {
    AddIssue.find({}, {_id: 0, __v:0})
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error; ${err}`))
})

module.exports = router


//  REQUEST TO ADD NEW POST

    router.post('/add', (req, res ) =>{
        const newPost = new AddIssue({
            issue: req.body.issue,
            institution: req.body.institution,
            location: req.body.location,
            date: req.body.date,
            status: req.body.status
        })

        newPost.save().then(() => res.json("The new post added successfully!"))
        .catch(err => res.status(400).json(`error: ${err}`))
    })

// REQUEST FIND POST BY ID
router.get('/:id', (req, res) => {
    AddIssue.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`error: ${err}`))
})


// REQUEST FIND POST BY ID AND UPDATE
router.put('/update/:id', (req, res) => {
    AddIssue.findById(req.params.id)
    .then(post => {
        post.issue = req.body.issue,
        post.institution = req.body.institution,
        post.location = req.body.location,
        post.date = req.body.date,
        post.status = req.body.status,

        post
        .save()
        .then(()=> res.json('AddIssue is updated successfully')) 
        .catch(err => res.status(400).json(`error: ${err}`))
    })
    .catch(err => res.status(400).json(`error: ${err}`))

})

// REQUEST FIND POST BY ID AND DELETE

router.delete('/delete/:id', (req, res) => {
    AddIssue.findByIdAndDelete(req.params.id)
    .then(post => {
        post.issue = req.body.issue,
        post.institution = req.body.institution,
        post.location = req.body.location,
        post.date = req.body.date,
        post.status = req.body.status,

        post
        .save()
        .then(()=> res.json('AddIssue is deleted successfully')) 
        .catch(err => res.status(400).json(`error: ${err}`))
    })
    .catch(err => res.status(400).json(`error: ${err}`))

})