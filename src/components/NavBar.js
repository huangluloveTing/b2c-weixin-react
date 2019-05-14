import React from 'react'
import PropTypes from 'prop-types'
import * as baseStyle from '../base/base_style'
import arrowStyle from './navibar.module.css'
import ScrollableHeader from './ScrollableHeader'


export default class NavBar extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (    
            <div style={{...stlyes.headerBg , ...{ background:this.props.bgColor }}}>
                <div onClick={(ev) => {
                }}><i className='iconfont icon-per' style={{ ...stlyes.iconStyle}}></i></div>
                <div onClick={() => {
                    if (this.props.middleAction) {
                        this.props.middleAction()
                    }
                }}>
                    <div style={stlyes.middleContainer}> 
                        <ScrollableHeader style={{maxWidth: baseStyle.calc_width(200),height:'100%' ,color:'white' , fontSize:baseStyle.calc_width(16)}}>
                            <marquee> 银犁商城 滚动字幕 银犁商城 滚动字幕 </marquee>
                        </ScrollableHeader>
                        <div style={{marginLeft: '10px'}}>
                        <i className={'icon iconfont icon-right ' + arrowStyle.arrowBox || ''}></i>
                        <i className={'icon iconfont icon-right ' + arrowStyle.arrowBox || ''}></i>
                        <i className={'icon iconfont icon-right ' + arrowStyle.arrowBox || ''}></i>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    if (this.props.rightAction) {
                        this.props.rightAction()
                    }
                }}><i className="icon iconfont icon-sousuokuangneisousuopxSVG" style={{ ...stlyes.iconStyle}}></i></div>
            </div>
        )
    }
}

NavBar.propTypes = {
    bgColor:PropTypes.string,
    leftAction:PropTypes.func,
    middleAction:PropTypes.func,
    rightAction:PropTypes.func,
    middleView:PropTypes.string
}

const stlyes = {
    headerBg : {
        padding: '0 5px',
        height: baseStyle.calc_width(50),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconStyle : {
        height:baseStyle.calc_width(40),
        display:'inline-block',
        lineHeight:baseStyle.calc_width(40),
        color:'white',
        fontSize: baseStyle.calc_width(20)
    },
    other: {
        backgroundColor:'blue'
    },
    middleContainer : {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        padding:  baseStyle.calc_width(5) + ' ' + baseStyle.calc_width(10),
        border: 'solid #fff 0.5px',
        borderRadius: '5px',
    }
}