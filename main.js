const allStories = [

  {
    id: 1,
    author: "Meowsterpiece",
    imageUrl: "images/2.jpg",
  },

  {
    id: 2,
    author: "Purrlock Holmes",
    imageUrl: "images/3.jpg",
  },

  {
    id: 3,
    author: "Catniss Everclean",
    imageUrl: "images/4.jpg",
  },

  {
    id: 4,
    author: "Sir Pounce-a-lot",
    imageUrl: "images/5.jpg",
  },

  {
    id: 5,
    author: "Furrball McFluff",
    imageUrl: "images/6.jpg",
  },

  {
    id: 6,
    author: "Kitty Smalls",
    imageUrl: "images/7.jpg",
  },

  {
    id: 7,
    author: "Flora Maeve",
    imageUrl: "images/8.jpg",
  },

  {
    id: 8,
    author: "Tabbytha Christie",
    imageUrl: "images/9.jpg",
  },

  {
    id: 9,
    author: "Purrlock Combs",
    imageUrl: "images/10.jpg",
  },

  {
    id: 9,
    author: "Catrick Swayze",
    imageUrl: "images/11.jpg",
  },

  {
    id: 9,
    author: "Mr. Fresh",
    imageUrl: "images/12.jpg",
  },

  {
    id: 9,
    author: "Clawdia Schiffer",
    imageUrl: "images/13.jpg",
  },
];

const handleCreateStoryClick = () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*, video/*";
  fileInput.click();

  fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    }
  });
};


const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".stories-full-view");
const closeBtn = document.querySelector(".close-btn");
const storyImageFull = document.querySelector(".stories-full-view .story img");
const storyAuthorFull = document.querySelector(
  ".stories-full-view .story .author"
);
const nextBtn = document.querySelector(".stories-container .next-btn");
const previousBtn = document.querySelector(".stories-container .previous-btn");
const storiesContent = document.querySelector(".stories-container .content");
const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
const previousBtnFull = document.querySelector(
  ".stories-full-view .previous-btn"
);

let currentActive = 0;

const createStories = () => {
  allStories.forEach((s, i) => {
    const story = document.createElement("div");
    story.classList.add("story");
    const img = document.createElement("img");
    img.src = s.imageUrl;
    const author = document.createElement("div");
    author.classList.add("author");
    author.innerHTML = s.author;

    story.appendChild(img);
    story.appendChild(author);

    stories.appendChild(story);

    story.addEventListener("click", () => {
      showFullView(i);
    });
  });
};

createStories();

const showFullView = (index) => {
  currentActive = index;
  updateFullView();
  storiesFullView.classList.add("active");
};

closeBtn.addEventListener("click", () => {
  storiesFullView.classList.remove("active");
});

const updateFullView = () => {
  storyImageFull.src = allStories[currentActive].imageUrl;
  storyAuthorFull.innerHTML = allStories[currentActive].author;
};

nextBtn.addEventListener("click", () => {
  storiesContent.scrollLeft += 300;
});

previousBtn.addEventListener("click", () => {
  storiesContent.scrollLeft -= 300;
});

storiesContent.addEventListener("scroll", () => {
  if (storiesContent.scrollLeft <= 24) {
    previousBtn.classList.remove("active");
  } else {
    previousBtn.classList.add("active");
  }

  let maxScrollValue =
    storiesContent.scrollWidth - storiesContent.clientWidth - 24;

  if (storiesContent.scrollLeft >= maxScrollValue) {
    nextBtn.classList.remove("active");
  } else {
    nextBtn.classList.add("active");
  }
});

nextBtnFull.addEventListener("click", () => {
  if (currentActive >= allStories.length - 1) {
    return;
  }
  currentActive++;
  updateFullView();
});

previousBtnFull.addEventListener("click", () => {
  if (currentActive <= 0) {
    return;
  }
  currentActive--;
  updateFullView();
});

// Login
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === 'admin' && password === 'password') {
          alert('Login successful');
          localStorage.setItem("userLoggedIn", "true");
          window.location.href = "index.html";
      } else {
          alert('Invalid username or password');
      }
    });
  }
});

