import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import APOD from '../components/APOD'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <APOD />
  </Layout>
)

export default IndexPage
