import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LandingPagePage = () => {
  return (
    <>
      <MetaTags title="LandingPage" description="LandingPage page" />

      <h1>LandingPagePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/LandingPagePage/LandingPagePage.js</code>
      </p>
      <p>
        My default route is named <code>landingPage</code>, link to me with `
        <Link to={routes.landingPage()}>LandingPage</Link>`
      </p>
    </>
  )
}

export default LandingPagePage
