import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './StoreBottomCart.scss'


export default class StoreBottomCart extends Component {

    render() {
        return (
            <div className='cart-container'>
                <div className='cart-icon'>
                </div>
                <div className='cart-info'>
                    <span> 合计：</span>
                    <span> 326.00 </span>
                </div>
                <div className='pay'> 
                    <span> 结算 </span>
                </div>
            </div>
        )
    }
}