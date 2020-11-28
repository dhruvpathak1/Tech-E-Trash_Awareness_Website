import React from "react"
import { Container } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <Layout>
      <Helmet title="404 Error" defer={false} />
    <SEO title="404: Not found" />
    <Container>
      <br />
      <center>
      <h1>404 ERROR </h1>
      <h2>Page Unavailable </h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <h3>Here are a few links to help you get back on track.</h3>
      </center>
    </Container>

  </Layout>
)

export default NotFoundPage
