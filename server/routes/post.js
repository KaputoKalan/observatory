const express = require("express")
const router= express.Router()
const Post = require("../models/post")


//REQUEST TO GET ALL POSTS
router.get("/", (req, res) => {
    Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error; ${err}`))
})

module.exports = router


//  REQUEST TO ADD NEW POST

    router.post('/add', (req, res ) =>{
        const newPost = new Post({
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            description: req.body.description,
            files: req.body.files
        })

        newPost.save().then(() => res.json("The new post added successfully!"))
        .catch(err => res.status(400).json(`error: ${err}`))
    })

// REQUEST FIND POST BY ID
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`error: ${err}`))
})


// REQUEST FIND POST BY ID AND UPDATE
router.put('/update/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        post.name = req.body.name,
        post.phone = req.body.phone,
        post.location = req.body.location,
        post.description = req.body.description,
        post.files = req.body.files,

        post
        .save()
        .then(()=> res.json('Post is updated successfully')) 
        .catch(err => res.status(400).json(`error: ${err}`))
    })
    .catch(err => res.status(400).json(`error: ${err}`))

})

// REQUEST FIND POST BY ID AND DELETE

router.delete('/delete/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(post => {
        post.name = req.body.name,
        post.phone = req.body.phone,
        post.location = req.body.location,
        post.description = req.body.description,
        post.files = req.body.files,

        post
        .save()
        .then(()=> res.json('Post is deleted successfully')) 
        .catch(err => res.status(400).json(`error: ${err}`))
    })
    .catch(err => res.status(400).json(`error: ${err}`))

})