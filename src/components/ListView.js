import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListView.scss'


export default class ListView extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { data , renderItem } = this.props
        let items = data.map((item , index) => {
            return <div key={index + ''} onClick={() => {
                if(this.props.clickItem) {this.props.clickItem(index)}
            }}> { renderItem(item , index)}</div>
        })
        return(
        <div className='custom-listView'>
            {items}
        </div>           
        )
    }
}


ListView.propTypes = {
    data:PropTypes.array.isRequired,
    renderItem:PropTypes.func.isRequired,
    clickItem:PropTypes.func
}