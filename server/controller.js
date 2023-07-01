const stories = []

module.exports ={
    saveStory: (req,res) =>{
        stories.push(req.body)
        res.status(200).send(stories)
    
    },

    displayStory: (req,res) =>{
        res.status(200).send(stories)
    },  
    
    deleteStory: (req,res)=>{
        let {index} = req.params
        stories.splice(+index,1)
        res.status(200).send(stories)
    }
}