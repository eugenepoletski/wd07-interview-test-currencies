import { connect } from 'react-redux'
import { errorsResetMessage } from '../../actions'
import Errors from './Errors'

const mapStateToProps = state => {
  return {
    error: state.errors.error,
    message: state.errors.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetError: () => dispatch( errorsResetMessage() )
  }
}

const ErrorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors)

export default ErrorsContainer