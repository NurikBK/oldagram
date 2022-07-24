const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]
const sectionEl = document.getElementById('section')
let likes = 21000;
renderPage()

const imgEl = document.getElementById('img-el')
const likeBtn = document.getElementById('like-btn')
const likeCount = document.getElementById('like-count');
const likeIcon = document.getElementById('like-icon')



function renderPage() {
    for (let i = 0; i < posts.length; i++) {
        sectionEl.innerHTML += `
        <div class="user-container">
        <div class="avatars">
          <img
            class="avatar"
            src="${posts[i].avatar}"
            alt="user avatar"
          />
        </div>
        <div class="info">
          <h3>${posts[i].name}</h3>
          <h4>${posts[i].location}</h4>
        </div>
      </div>

      <div class="post-container">
        <img id="img-el" src="${posts[i].post}" alt="van Gogh post" />
      </div>
      <div class="bottom-section">
        <div class="icons-container">
          <button class="icon" id="like-btn">
            <svg
              class="like-icon" id="like-icon"
              width="23"
              height="23"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z"
                stroke="black"
                stroke-width="2.32996"
              />
            </svg>
          </button>
          <img
            class="icon"
            src="images/icon-comment.png"
            alt="comments icon"
          />
          <img class="icon" src="images/icon-dm.png" alt="dm icon" />
        </div>

        <div class="likes-container">
          <p class="bold-text">
            <span id="like-count" class="likes">${likes}</span> likes
          </p>
        </div>

        <div class="comments">
          <p>
            <span class="username bold-text">${posts[i].username}</span> 
            ${posts[i].comment}
          </p>
        </div>
      </div> 
        `
    }
}

likeBtn.addEventListener('click', function() {
    likeIcon.classList.toggle('red');
    if(likeIcon.classList.contains('red')){
        likeCount.innerText = likes += 1; 
    } else {
        likeCount.innerHTML = likes -= 1;
    }
})

imgEl.addEventListener('dblclick', function() {
    likeIcon.classList.toggle('red');
    if(likeIcon.classList.contains('red')){
        likeCount.innerText = likes += 1; 
    } else {
        likeCount.innerHTML = likes -= 1;
    }
})