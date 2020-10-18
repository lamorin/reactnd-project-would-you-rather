import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'
import QuestionResults from './QuestionResults'

class Home extends Component {
  render() {
    const { selectedQuestion } = this.props
    console.log(`selelectedQuestion - ${selectedQuestion}`)
    return (
      <Container maxWidth="md" align="center">
        {selectedQuestion === null && <QuestionsTabs />}
        {selectedQuestion !== null && (
          <QuestionResults question={selectedQuestion} />
        )}
      </Container>
    )
  }
}

function mapStateToProps({ selectedQuestion }) {
  return { selectedQuestion }
}

export default connect(mapStateToProps)(Home)
