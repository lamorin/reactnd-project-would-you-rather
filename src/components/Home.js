import React from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'

function Home(props) {
  return (
    <Container maxWidth="md" align="center">
      <QuestionsTabs></QuestionsTabs>
    </Container>
  )
}

function mapStateToProps({ activePanel }) {
  return {
    activePanel,
  }
}

export default connect(mapStateToProps)(Home)
