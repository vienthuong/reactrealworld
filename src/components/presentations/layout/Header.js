import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

const Header = props => {
    return (
        <div>
        <LoadingBar />
        <header className="page-header">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Header Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your header content.</p>
            </div>
          </div>
        </div>
      </header>
      </div>
    )
}

export default Header