import React from 'react'

const Layout = (props) => (
  <div className='container'>
    {props.children}
  </div>
)

const {element} = React.PropTypes

Layout.propTypes = {
  children: element
}

export default Layout