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
  } else if(e.target.id == "btn-soclinks") {
    renderSocmed()
  }
})

// function

const renderStudentProfile = () => {
  titleSection.innerHTML = `
  <i class="fa-solid fa-user"></i>
  <h3>Student Profile</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li><i class="fa-regular fa-user"></i>Name: John Mark F. Quijano</li>
    <li><i class="fa-solid fa-calendar-day"></i>Age: 19 years old</li>
    <li><i class="fa-solid fa-person"></i>Gender: Male</li>
    <li><i class="fa-solid fa-cake-candles"></i>Birthday: June 12, 2003</li>
    <li><i class="fa-solid fa-school"></i>Current School: ICCT College</li>
    <li><i class="fa-solid fa-laptop-code"></i>Course: BSIT</li>
    <li><i class="fa-solid fa-magnifying-glass"></i>Section: OLCA211A031</li>
    <li><i class="fa-solid fa-code"></i>Skills: Basic HTML, CSS, JS, RegEx Git, and Python</li>
  </ul>
  `
}

const renderHobbies = () => {
  titleSection.innerHTML = `
  <i class="fa-solid fa-star"></i>
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

const renderInterest = () => {
  titleSection.innerHTML = `
  <i class="fa-solid fa-heart"></i>
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

const renderExp = () => {
  titleSection.innerHTML = `
  <h3>Memorable Experience</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>- When i fell down from the stairs when I was kinder and got my right arm fractured.</li>
    <li>- When I got hypokalemia</li>
    <li>- I lost my first girl best friend</li>
    <li>- My Highschool Graduation</li>
    <li>- Everytime I help other people</li>
  </ul>
  `
}

const renderDislikes = () => {
  titleSection.innerHTML = `
  <i class="fa-solid fa-thumbs-down"></i>
  <h3>Dislikes</h3>
  `

  descSection.innerHTML = `
    <ul>
      <li>People taking advantage of you</li>
      <li>Boastful Person</li>
      <li>Social Interaction</li>
      <li>Staying with crowds</li>
      <li>Noisy and Loud Places/Person</li>
    </ul>
  `
}

const renderKpop = () => {
  titleSection.innerHTML = `
  <h3>Kpop/Kbands that i like</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li>Twice</li>
    <li>Fromis9</li>
    <li>Aespa</li>
    <li>Loona</li>
    <li>Itzy</li>
  </ul>
  <ul>
    <li>Lucy</li>
    <li>Day6</li>
    <li>Wave to Earth</li>
    <li>Hoppipolla</li>
    <li>The Poles</li>
    <li>The Rose</li>
  </ul>
  `
  descSection.style.display = 'flex'
  descSection.style.cssText = "justify-content: space-around;"
}

const renderSocmed = () => {
  titleSection.innerHTML = `
  <i class="fa-solid fa-list"></i>
  <h3>Social Links</h3>
  `

  descSection.innerHTML = `
  <ul>
    <li><i class="fa-brands fa-facebook"></i><a href="https://www.facebook.com/johnmark.quijano.9" target="_blank">Facebook</a></li>
    <li><i class="fa-brands fa-github"></i><a href="https://github.com/crxtzonceu" target="_blank">Github</a></li>
    <li><i class="fa-brands fa-twitter"></i><a href="https://twitter.com/crxtzonceu" target="_blank">Twitter</a></li>
    <li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/john-mark-quijano-a1b08422b/" target="_blank">LinkedIn</a></li>
    <li><i class="fa-brands fa-stack-overflow"></i><a href="https://stackoverflow.com/users/16022759/crxtzonceu" target="_blank">StackOverflow</a></li>
    <li><i class="fa-brands fa-discord"></i>Discord: crxtzonceu#7882</li>
  </ul>
  `
}

renderStudentProfile()