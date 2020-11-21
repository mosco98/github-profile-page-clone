// Basic nav bar animations
const subNavBigScreen = document.getElementsByClassName('sub-nav__big-screen')
const subNavSmallScreen = document.getElementsByClassName('sub-nav__small-screen')
const userAvatarCtn = document.getElementsByClassName('user-avatar-ctn')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 86) {
    document.getElementById('sub-nav__big-screen').classList.add('fixed')
  } else if (window.pageYOffset < 86) {
    document.getElementById('sub-nav__big-screen').classList.remove('fixed')
  }

  if (window.pageYOffset > 300) {
    document.getElementById('sub-nav__user-details').classList.add('show')
  } else if (window.pageYOffset < 300) {
    document.getElementById('sub-nav__user-details').classList.remove('show')
  }

  // console.log(subNavSmallScreen)
  if (window.pageYOffset > 320) {
    document.getElementById('sub-nav__small-screen').classList.add('fixed')
  } else if (window.pageYOffset < 320) {
    document.getElementById('sub-nav__small-screen').classList.remove('fixed')
  }
})

// Getting github user details

const user = {
  name: 'Moses Enyinnaya',
  avatarUrl: 'https://avatars1.githubusercontent.com/u/44283935?u=6709c55ec2be3eea9e0342063c7ee7c3a1a70430&v=4',
  bio: 'Software Engineer',
  login: 'mosco98',
  repositories: {
    nodes: [
      {
        name: 'vanilla-html-example',
        url: 'https://github.com/mosco98/vanilla-html-example',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-11-18T00:45:24Z'
      },
      {
        name: 'github-profile-page-clone',
        url: 'https://github.com/mosco98/github-profile-page-clone',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-11-18T00:35:13Z'
      },
      {
        name: 'flights-app',
        url: 'https://github.com/mosco98/flights-app',
        description: 'A simple React app that checks in users at an airport',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-11-05T13:43:36Z'
      },
      {
        name: 'blog-app',
        url: 'https://github.com/mosco98/blog-app',
        description:
          'A MERN stack app that demonstrates the CRUD operations - allowing a user to create, get, edit and delete posts. It also has an authentication system that gives a user access to just their own data.',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-10-25T10:10:26Z'
      },
      {
        name: 'todo-app',
        url: 'https://github.com/mosco98/todo-app',
        description: 'A todo app built with ReactJS and retains data with Local storage',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-10-14T18:18:39Z'
      },
      {
        name: 'shopping-cart',
        url: 'https://github.com/mosco98/shopping-cart',
        description: 'A simple e-commerce website that allows user select items to cart and checkout',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: []
        },
        updatedAt: '2020-10-06T23:48:08Z'
      },
      {
        name: 'pdf-reader',
        url: 'https://github.com/mosco98/pdf-reader',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: []
        },
        updatedAt: '2020-10-02T12:50:16Z'
      },
      {
        name: 'bitzprice',
        url: 'https://github.com/mosco98/bitzprice',
        description:
          'A simple application built with Next.js that pulls Bitcoin pricing from an API and displays it on the app',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-10-02T09:06:05Z'
      },
      {
        name: 'shopping-list-electron',
        url: 'https://github.com/mosco98/shopping-list-electron',
        description:
          'A minimal shopping list desktop app built with Electron.js with a custom menu and multiple windows and implement Materialize CSS for styling.',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-10-02T07:31:28Z'
      },
      {
        name: 'expense-tracker',
        url: 'https://github.com/mosco98/expense-tracker',
        description: 'Expense tracker | React Hooks & Context API',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-09-25T00:44:06Z'
      },
      {
        name: 'chat-app',
        url: 'https://github.com/mosco98/chat-app',
        description: 'Real-time chat application built with React.js, Node.js, Express.js, and Socket.io.',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-09-26T07:43:10Z'
      },
      {
        name: 'react-tailwindcss-starter-kit',
        url: 'https://github.com/mosco98/react-tailwindcss-starter-kit',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-09-24T12:42:10Z'
      },
      {
        name: 'Dashboard',
        url: 'https://github.com/mosco98/Dashboard',
        description: 'Building out a Dashboard extension for chrome. Wish me luck!',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-07-17T15:29:38Z'
      },
      {
        name: 'portfolio',
        url: 'https://github.com/mosco98/portfolio',
        description: 'My personal portfolio built with React',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-07-07T07:54:27Z'
      },
      {
        name: 'Text-to-speech-api',
        url: 'https://github.com/mosco98/Text-to-speech-api',
        description: null,
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'JavaScript'
            }
          ]
        },
        updatedAt: '2020-05-09T20:47:24Z'
      },
      {
        name: 'countdown-timer-app',
        url: 'https://github.com/mosco98/countdown-timer-app',
        description: 'A countdown timer app built in React',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-06-18T16:05:19Z'
      },
      {
        name: 'Text-to-speech-App',
        url: 'https://github.com/mosco98/Text-to-speech-App',
        description:
          'A text to speech that converts texts to speech and lets the user download the converted texts as audio and can also create an account to create to save audios online ',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-06-06T17:05:49Z'
      },
      {
        name: 'TicTacToe',
        url: 'https://github.com/mosco98/TicTacToe',
        description: 'A Tic Tac Toe game built with React',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-06-07T17:50:58Z'
      },
      {
        name: 'movies',
        url: 'https://github.com/mosco98/movies',
        description: 'Movies app with react',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: [
            {
              name: 'HTML'
            }
          ]
        },
        updatedAt: '2020-03-17T12:13:57Z'
      },
      {
        name: 'devscreen-react',
        url: 'https://github.com/mosco98/devscreen-react',
        description: 'An chrome extension that updates developer users with articles from top developer blogs',
        stargazerCount: 0,
        forkCount: 0,
        languages: {
          nodes: []
        },
        updatedAt: '2020-02-15T17:46:46Z'
      }
    ]
  }
}

// Get DOM elements
const userFullNameField = document.getElementById('user-full-name')
const userNameNavField = document.getElementById('user-name__nav')
const userNameField = document.getElementById('user-name__user-details')
const avatarBigImg = document.getElementById('avatar-big')
const avatarSmallImg = document.getElementById('avatar-small')
const navAvatarSmallImg = document.getElementById('avatar-small-nav')
const userBioField = document.getElementById('bio')

// User full name
userFullNameField.innerText = user.name

// Avatars
avatarBigImg.src = user.avatarUrl
avatarSmallImg.src = user.avatarUrl
navAvatarSmallImg.src = user.avatarUrl

// Username
userNameField.innerText = user.login
userNameNavField.innerText = user.login

// User bio
userBioField.innerText = user.bio

const repositories = user.repositories.nodes

repositories.forEach((repo) => {
  const reposCtn = document.getElementById('repos-ctn')
  const { name, description, url, stargazerCount, forkCount, updatedAt, languages } = repo

  const checkLanguage = languages.nodes.length ? languages.nodes[0].name : ''

  let output = ''
  output += `
      <div class="repo">
      <div class="repo__title-ctn">
        <a href=${url}>
          <h3>${name}</h3>
        </a>
        ${description ? `<p>${description}</p>` : ''}
        <button>
          <svg
            class="octicon octicon-star mr-1"
            viewbox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          <span>Star</span>
        </button>
      </div>
      <ul class="repo-details">
        ${
          checkLanguage
            ? `
          <li class="repo-details__language-tags">
            <span class="repo-details__language-color yellow"></span>
            <span class="repo-details__language">
              ${checkLanguage}
            </span>
          </li>
          `
            : ''
        }
        ${
          stargazerCount > 0
            ? `<li class="repo__star">
        <svg
          class="octicon octicon-star mr-1"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        <span>${stargazerCount}</span>
      </li>`
            : ''
        }
        ${
          forkCount > 0
            ? `<li class="repo__fork">
          <svg
            class="octicon octicon-repo-forked"
            viewbox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          <span>2</span>
        </li>`
            : ''
        }
        <li>
          <span>Updated ${moment(updatedAt).fromNow()}</span>
        </li>
      </ul>
    </div>
    <hr/>
      `
  reposCtn.innerHTML += output
})
