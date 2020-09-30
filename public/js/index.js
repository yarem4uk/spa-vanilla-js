import Dashboard from './views/Dashboard.js'
import Posts from './views/Posts.js'
import Settings from './views/Settings.js'

const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings },
  ]

  const potentialMatches = routes.map(route => {
    return {
      route,
      isMatch: window.location.pathname === route.path,
    }
  })

  let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch)

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }
  const view = new match.route.view()

  const app = document.querySelector('#app')
  app.innerHTML = await view.getHtml()
}

const navigateTo = url => {
  window.history.pushState(null, null, url)
  router()
}

window.addEventListener('popstate', () => {
  router()
})

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })
  router()
})
