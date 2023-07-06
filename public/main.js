let madlibForm = document.querySelector('#madlibs-form')
let madlibForm2 = document.querySelector('#madlibs-form2')
let storySection = document.getElementById('completed-story')
// let storySection2 = document.getElementById('completed-story2')

let definebtn = document.getElementById('define')

let storyBox = document.getElementById('story-box')

const submitMadLibs = (event) => {
    event.preventDefault();
    storyBox.innerHTML = '<div id="completed-story"></div>'
    storySection = document.getElementById('completed-story')
    madlibForm.classList.add('hide')
    storyBox.classList.remove('hide')
    let form = new FormData(event.target)
    let userSubmission = Object.fromEntries(form)
    console.log(userSubmission)
    

    let story = `  <h3>Pizza, Pizza! : </h3>
    <p>Pizza was invented by a <span class="inserted-text">${userSubmission.adjective_1}</span> <span class="inserted-text">${userSubmission.nationality}</span> chef named <span class="inserted-text">${userSubmission.person_name}</span>. To make a pizza, you need to take a lump of <span class="inserted-text">${userSubmission.noun_1}</span>, and make a thin, round <span class="inserted-text">${userSubmission.adjective_2}</span> <span class="inserted-text">${userSubmission.noun_2}</span>. Then you cover it with <span class="inserted-text">${userSubmission.adjective_3}</span> sauce, <span class="inserted-text">${userSubmission.adjective_4}</span> cheese, and fresh chopped <span class="inserted-text">${userSubmission.plural_noun}</span>. Next you have to bake it in a very hot <span class="inserted-text">${userSubmission.noun_3}</span>. When it is done, cut it into <span class="inserted-text">${userSubmission.number_1}</span> <span class="inserted-text">${userSubmission.shapes}</span>. Some kids like <span class="inserted-text">${userSubmission.food_1}</span> pizza the best, but my favorite is the <span class="inserted-text">${userSubmission.food_2}</span> pizza. If I could, I would eat pizza <span class="inserted-text">${userSubmission.number_2}</span> times a day!</p>`

    storySection.innerHTML = story
    storySection.classList.remove('hide')

    let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Try Again</button>`;

    let newButton =`<button id="new-story" onclick="getNewForm()">Try a New Story</button>`

    let saveButton = `<button id="save-button" onclick="saveStory()">Save Story</button>`

    storyBox.innerHTML += resetButton;
    storyBox.innerHTML += newButton;
    storyBox.innerHTML += saveButton;
}

const getNewForm = (event) =>{
    storySection.classList.add('hide')
    storyBox.classList.add('hide')
    madlibForm2.classList.remove('hide')
   

    let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Try Again</button>`;

    storyBox.innerHTML += resetButton;

}

const submitMadLib2 = event =>{
    event.preventDefault();
    storyBox.innerHTML = '<div id="completed-story"></div>'
    storySection = document.getElementById('completed-story')
    madlibForm2.classList.add('hide')
    storyBox.classList.remove('hide')
    let form2 = new FormData(event.target)
    let userSubmission2 = Object.fromEntries(form2)
    console.log(userSubmission2)

    let story2 = `
    <h3>Weird News: </h3>
    
    <p> A <span class="inserted-text">${userSubmission2.noun_4}</span> in <span class="inserted-text">${userSubmission2.state}</span> was arrested this morning after they <span class="inserted-text">${userSubmission2.verb}</span> in front of a <span class="inserted-text">${userSubmission2.noun_5}</span>. The criminal in question had a history of <span class="inserted-text">${userSubmission2.verb_2}</span>, but no one-not even his <span class="inserted-text">${userSubmission2.noun_6}</span>- ever imagined they'd <span class="inserted-text">${userSubmission2.verb_3}</span> with a <span class="inserted-text">${userSubmission2.noun_7}</span> stuck in their <span class="inserted-text">${userSubmission2.body_part}</span>.
    A close friend we interviewed stated: "I always thought they were <span class="inserted-text">${userSubmission2.adjective_5}</span>, but I never thought they'd do something like this. Even his <span class="inserted-text">${userSubmission2.relative}</span> was surprised!"
    In <span class="inserted-text">${userSubmission2.month}</span> a woman was charged with a similar crime. She was <span class="inserted-text">${userSubmission2.verb_4}</span> with a <span class="inserted-text">${userSubmission2.adjective_6}</span> dog.
    Either way, we imagine that after witnessing these crimes, there are probably a whole lot of <span class="inserted-text">${userSubmission2.plural_noun2}</span> that are going to need some therapy. </p>`

    storySection.innerHTML = story2
    storySection.classList.remove('hide')

    let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Try Again</button>`;

    let saveButton = `<button id="save-button" onclick="saveStory()">Save Story</button>`

    storyBox.innerHTML += resetButton;
    storyBox.innerHTML += saveButton;
}


const resetMadLibs = () => {
    storySection.classList.add('hide');
    storyBox.classList.add('hide')
    storySection.innerHTML = '';
    // storySection2.classList.add('hide');
    // storySection2.innerHTML = '';
    madlibForm.reset();
    madlibForm.classList.remove('hide');
} 


madlibForm.addEventListener('submit', submitMadLibs)
madlibForm2.addEventListener('submit', submitMadLib2)
