import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
    <h1>Welcome back, Dom</h1>
    <p>Amet nam ab aliquam porro temporibus Est est expedita enim repudiandae deleniti repellat Qui molestiae est tempore voluptatem aut Cupiditate tempore excepturi veniam amet odit. Molestiae sequi molestiae sunt autem</p>
    <p>
      <a href="/posts" data-link>View recent posts</a>
    </p>
    `
  }
}
