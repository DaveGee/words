import React from 'react'
import { connect } from 'react-redux'
import Types from 'prop-types'
import routes from '../services/routes'

const Screen = ({
  Element,
  ...other
}) => (
  <Element {...other} />
)

Screen.propTypes = {
  Element: Types.func
}

export default connect(
  state => ({ Element: routes.find(s => s.label === state.screen).screen })
)(Screen)