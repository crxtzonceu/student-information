const titleSection = document.getElementById("main-title")
const descSection = document.getElementById("main-desc")

// event listener
document.addEventListener('click', function(e) {
  if(e.target.id == "btn-profile") {
    renderStudentProfile()
  } else if(e.target.id == "btn-hobbies") {
    renderHobbies()
  } else if(e.target.id == "btn-interest") {
    renderInterest()
  } else if(e.target.id == "btn-exp") {
    renderExp()
  } else if(e.target.id == "btn-dislikes") {
    renderDislikes()
  } else if(e.target.id == "btn-kpop") {
    renderKpop()
  } else if(e.target.id == "btn-socmed") {
    renderSocmed()
  }
})

// function

function renderStudentProfile() {
  titleSection.innerHTML = `
  <h3>Student Profile</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>Name: John Mark F. Quijano</li>
    <li>Age: 19 years old</li>
    <li>Gender: Male</li>
    <li>Birthday: June 12, 2003</li>
    <li>Current School: ICCT College</li>
    <li>Course: BSIT</li>
    <li>Section: OLCA211A031</li>
  </ul>
  `
}

function renderHobbies() {
  titleSection.innerHTML = `
  <h3>Hobbies</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>Play Mobile Games</li>
    <li>Read Webtoons/Manhua/Manhwa</li>
    <li>Watch Funny/Interesting Videos</li>
    <li>Programming</li>
    <li>Explore Interesting Topics/Fields</li>
    <li>Listen To Musics that i like</li>
    <li>Procrastinate</li>
    <li>Overthink</li>
    <li>Being Alone</li>
  </ul>
  `
}

function renderInterest() {
  titleSection.innerHTML = `
  <h3>Interest</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>Nice People</li>
    <li>Programming</li>
    <li>Games that i'm good at</li>
    <li>To learn and to be better at programming</li>
    <li>True Friend</li>
    <li>Kband</li>
    <li>Kpop</li>
    <li>Want to learn Pixel Art</li>
  </ul>
  `
}

function renderExp() {
  titleSection.innerHTML = `
  <h3>Memorable Experience</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>- When i fell down from the stairs when I was kinder and got my right arm fractured.</li>
    <li>- When I got hypokalemia</li>
    <li>- I lost my first girl best friend</li>
    <li>- My Highschool Graduation</li>
  </ul>
  `
}

function renderDislikes() {
  titleSection.innerHTML = `
  <h3>Dislikes</h3>
  `

  descSection.innerHTML = `
    <ul>
      <li>People using you</li>
      <li>Boastful Person</li>
      <li>Social Interaction</li>
      <li>Staying with crowds</li>
    </ul>
  `
}

function renderKpop() {
  titleSection.innerHTML = `
  <h3>Kpop/Kbands that i like</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>Twice</li>
    <li>Fromis9</li>
    <li>Aespa</li>
    <li>Loona</li>
  </ul>
  <ul>
    <li>Lucy</li>
    <li>Day6</li>
    <li>Wave to Earth</li>
    <li>The Poles</li>
    <li>The Rose</li>
  </ul>
  `
  descSection.style.display = 'flex'
  descSection.style.cssText = "justify-content: space-around;"
}

function renderSocmed() {
  titleSection.innerHTML = `
  <h3>Social Links</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li><a href="https://www.facebook.com/johnmark.quijano.9" target="_blank">Facebook</a></li>
    <li><a href="https://github.com/crxtzonceu" target="_blank">Github</a></li>
    <li><a href="https://twitter.com/crxtzonceu" target="_blank">Twitter</a></li>
  </ul>
  `
}

renderStudentProfile()