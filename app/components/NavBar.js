import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render () {
        if(this.props.location.pathname == '/'){
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')} className={'logo'}/></Link>
                    <span className={'menu'}>
                        <Link to={'/signup'} className={'link'} >
                            Sign up
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/signin'} className={'link'}>
                            Sign in
                        </Link> 
                    </span>
                </div>
            )
        } else {
            return (
                <div className={'navBar'}>
                    <Link to={'/'}><img src={require('../img/codewikiwhite.gif')} className={'logo'}/></Link>
                    <span className={'menu'}>
                        <Link to={'/'} className={'link'}>
                            {this.props.name}
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/a'} className={'link'}>
                            Sign out
                        </Link>
                    </span>
                </div>
            )
        }
    }
}

export default NavBar