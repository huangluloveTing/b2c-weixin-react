import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ZTTagView.scss'


function TagItem(selected , tagName) {
    const className  = selected ? 'tag-selected' : 'tag-normal'
    return (
        <div className={'tag ' + className}>
            <span> {tagName} </span>
        </div>
    )
}



export default class ZTTagView extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='tag-container'>
                {this.renderItems()}
            </div>
        )
    }


    renderItems() {
        let { tags } = this.props
        let items = tags.map((item , index) => {
            let s_index = this.props.selectedIndex ? this.props.selectedIndex : 0
            return <div key={index + ''} onClick={() => {
                if(this.props.click) {this.props.click(index)}
            }}>{TagItem(s_index == index , item)}</div>
        })
        return items;
    }
}

ZTTagView.propTypes = {
    tags: PropTypes.array,
    selectedIndex:PropTypes.number,
    click:PropTypes.func
}