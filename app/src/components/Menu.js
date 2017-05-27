import './Menu.css'
import React from 'react'
import Types from 'prop-types'
import { connect } from 'react-redux'
import { navigateAction } from '../actions'

const menus = [
  'Play',
  'List',
]

const Menu = ({
  currentMenu,
  onNavigate
}) => (
  <div className="Menu">
    {menus.map((m, i) => (
      <a onClick={() => onNavigate(m.toUpperCase())} key={m+i}>
        <span>{m}</span>
      </a>
    ))}
  </div>
)

Menu.propTypes = {
  currentMenu: Types.string.isRequired,
  onNavigate: Types.func.isRequired,
}

const mapStateToProps = state => ({
  currentMenu: state.menu,
})

const mapDispatchToProps = dispatch => ({
  onNavigate: menu => dispatch(navigateAction(menu))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)