import './Menu.css'
import React from 'react'
import Types from 'prop-types'
import { connect } from 'react-redux'
import { navigateAction } from '../actions'
import routes from '../services/routes'

const Menu = ({
  currentMenu,
  onNavigate
}) => (
  <div className="Menu">
    {routes.map(({ label }, i) => (
      <a onClick={() => onNavigate(label)} key={label+i} className={label === currentMenu ? 'Menu--current' : ''}>
        <span>{label}</span>
      </a>
    ))}
  </div>
)

Menu.propTypes = {
  currentMenu: Types.oneOfType([
    Types.string,
    Types.element,
  ]).isRequired,
  onNavigate: Types.func.isRequired,
}

const mapStateToProps = state => ({
  currentMenu: state.screen,
})

const mapDispatchToProps = dispatch => ({
  onNavigate: menu => dispatch(navigateAction(menu))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)