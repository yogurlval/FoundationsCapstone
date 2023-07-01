let storyContainer = document.getElementById('story-container')

function displayStory() {
    storyContainer.innerHTML = '';

    axios.get('/api/stories')
    .then(response =>{
        let stories = response.data
        if (stories.length === 0) {
            storyContainer.innerHTML = 'No stories saved yet.';
            return;
          }
        
          stories.forEach((story, index) => {
            const paragraph = document.createElement('p')
            paragraph.innerHTML = `Story ${index + 1}: ${story.story}`
            let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'remove'
        deleteBtn.id = index
        deleteBtn.addEventListener('click', deleteStory)
        
        
            storyContainer.appendChild(paragraph)
            storyContainer.appendChild(deleteBtn)

          });
        })
    .catch(err => console.log(err))
}
  
  

const saveStory = () =>{

    storyContainer = document.getElementById('completed-story')

    let bodyObj ={
        story: storyContainer.innerHTML
    }

    axios.post('/api/stories', bodyObj)
    .then(response =>{
        displayStory(response.data)
        console.log('Story saved', response.data)
    }).catch(err => console.log(err))
}

function deleteStory(evt){
    axios.delete(`/api/stories/${evt.target.id}`)
    .then(response =>{
        displayStory(response.data)
    })
}

displayStory()