
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ScrollableHeader.scss'


export default class ScrollableHeader extends Component {

    render () {
        return (
            <div className='' {...this.props}>
                {this.props.children}
            </div>
        )
    }
}