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

const config = {
  TOKEN: '3ed390bdf22ea18f8f5f02cb3e13fef4734e29a4',
  USERNAME: 'mosco98'
}

const baseURL = 'https://api.github.com/graphql'

const body = {
  query: `
  {
    user(login: "${config.USERNAME}") {
      name
      avatarUrl
      bio
      login
      repositories(first: 20, privacy:PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}, affiliations: [OWNER]) {
        nodes {
          name
          url
          description
          stargazerCount
          forkCount
          languages(first: 1) {
            nodes {
              name
            }
          }
          updatedAt
        }
      }
    }
  }
  `
}

const params = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: `bearer ${config.TOKEN}`
  },
  body: JSON.stringify(body)
}

async function getUserDetails(params) {
  try {
    const response = await fetch(baseURL, params)
    const data = await response.json()
    const {
      data: { user }
    } = data

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

      let languageColorClassNames = ''
      if (checkLanguage === 'HTML') {
        languageColorClassNames = 'repo-details__language-color' + 'red'
      }

      if (checkLanguage === 'CSS') {
        languageColorClassNames = 'repo-details__language-color' + 'purple'
      }

      if (checkLanguage === 'JavaScript') {
        languageColorClassNames = 'repo-details__language-color' + 'yellow'
      }

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
  } catch (error) {
    console.log(error)
  }
}

getUserDetails(params)
