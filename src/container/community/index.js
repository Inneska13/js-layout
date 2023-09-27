import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Community')
page.append(title)

const TABS_LIST = [
  {
    isActive: false,
    info: 'База знань',
  },
  {
    isActive: true,
    info: 'Інформація',
  },
]

const createTabs = () => {
  const tabs = createElement('div', 'tabs')

  TABS_LIST.forEach((tabsData) => {
    const tabItem = createElement(
      'div',
      tabsData.isActive
        ? 'tab__item tab__item--active'
        : 'tab__item',
      tabsData.info,
    )
    tabs.append(tabItem)
  })

  return tabs
}

const tabs = createTabs()
page.append(tabs)

const createPost = () => {
  const post = createElement('div', 'post')

  // ===

  const postImg = createElement('img')
  postImg.src = '/img/community.png'
  post.append(postImg)

  // ===

  const postContent = createElement('div1', 'post__content')

  const postTitle = createElement(
    'h2',
    'post__title',
    `Що таке база знань?`,
  )
  postContent.append(postTitle)

  const postInfo = createElement(
    'p',
    'post__info',
    `База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань. `,
  )
  postContent.append(postInfo)

  post.append(postContent)

  // ===

  const postButton = createElement(
    'a',
    'button button--post',
    `Перейти до ком'юніті у Телеграм`,
  )
  postButton.href = '#'

  post.append(postButton)

  // ===

  return post
}

const post = createPost()
page.append(post)
