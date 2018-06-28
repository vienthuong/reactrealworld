import React, { PureComponent } from 'react'
import Header from './Header'
import Footer from './Footer'
import "./../../../styles/Layout.css"
import { connect } from "react-redux"

class Layout extends PureComponent {
    render(){
        return(
            <div>
                <Header />
                    <main className="container">
                    { this.props.children }
                    </main>
                <Footer />
            </div>
        )
    }
}
export default Layout